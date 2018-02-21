const { lstatSync, readdirSync, readFileSync } = require('fs')
const { join, parse } = require('path')
const Module = require('module')

const isDirectory = (source) => lstatSync(source).isDirectory()
const getDirectories = (source) =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

module.exports = class GenerateLocaleJsonPlugin {
  constructor ({ _locales }) {
    this.__localesPath = _locales
    this._locales = []
  }

  compile (comp) {
    const dirsPath = getDirectories(this.__localesPath)
    dirsPath.forEach((dirPath) => {
      try {
        const localeName = parse(dirPath).base
        const filename = join(this.__localesPath, localeName, 'messages.js')
        const code = readFileSync(filename, 'utf8')
        const mod = new Module(filename)
        mod.filename = filename
        mod._compile(code, filename)
        mod.paths = Module._nodeModulePaths(filename)
        this._locales.push({
          localeName,
          content: mod.exports,
          src: join(dirPath, 'messages.js')
        })
      } catch (err) {
        console.error(err)
      }
    })
  }

  generate (comp, done) {
    if (!this._locales.length) return done()

    for (let locale of this._locales) {
      comp.fileDependencies.push(locale.src)
      const source = JSON.stringify(locale.content)
      comp.assets[join('_locales', locale.localeName, 'messages.json')] = {
        source: () => source,
        size: () => source.length
      }
    }

    return done()
  }

  apply (compiler) {
    compiler.plugin('compile', (comp) => this.compile(comp))
    compiler.plugin('emit', (comp, done) => this.generate(comp, done))
  }
}
