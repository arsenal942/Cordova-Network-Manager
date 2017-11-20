var iOSWifiConnect = {

  connectNetwork: function (SSID, PASSWORD, win, fail) {
      cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', SSID, PASSWORD);
  }

};

module.exports = iOSWifiConnect;
