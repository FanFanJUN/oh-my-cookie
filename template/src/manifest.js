
module.exports = {
  name: 'OhMyCookie',
  version: '1.0.0',
  description: 'Cookies Manager',
  author: 'liangqi',
  manifest_version: 2,
  icons: { '16': 'icons/logo16.png', '128': 'icons/logo128.png' },
  permissions: [
    "\u003Call_urls\u003E",
    'activeTab',
    'tabs',
    'cookies', 
    'background',
    'contextMenus',
    'unlimitedStorage',
    'storage',
    'notifications',
    'identity',
    'identity.email'
  ],
  browser_action: {
    default_title: 'OhMyCookie',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: false,
    page: 'pages/background.html'
  },
  devtools_page: 'pages/devtools.html',
  options_page: 'pages/options.html',
  content_scripts: [],
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
  web_accessible_resources: [ 'panel.html', 'js/content.js' ]
}
