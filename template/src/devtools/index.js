chrome.devtools.panels.create('panel', 'img/logo.png', 'pages/panel.html', function (panel) {
  const __ = chrome.i18n.getMessage
  console.log(__('devtools'))
})
