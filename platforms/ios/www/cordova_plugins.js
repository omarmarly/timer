cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-background-timer.BackgroundTimer",
    "file": "plugins/cordova-background-timer/www/BackgroundTimer.js",
    "pluginId": "cordova-background-timer",
    "clobbers": [
      "window.BackgroundTimer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-background-timer": "0.0.4"
};
// BOTTOM OF METADATA
});