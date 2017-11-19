var iOSWifiConnect = {

  connectNetwork: function (SSID, PASSWORD, win, fail) {
      cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', SSID, PASSWORD);
  },

  isWifiEnabled: function (win, fail) {
      if (typeof win != "function") {
          console.log("isWifiEnabled first parameter must be a function to handle wifi status.");
          return;
      }
      cordova.exec(
          // Cordova can only return strings to JS, and the underlying plugin
          // sends a "1" for true and "0" for false.
          function (result) {
              win(result == "1");
          },
          fail, 'iOSWifiConnect', 'isWifiEnabled', []
      );
  },

  /**
 *  Gets the currently connected wifi SSID
 * @param 	win	callback function
 * @param 	fail	callback function if error
 */
  getCurrentSSID: function (win, fail) {
      if (typeof win != "function") {
          console.log("getCurrentSSID first parameter must be a function to handle SSID.");
          return;
      }
      cordova.exec(win, fail, 'iOSWifiConnect', 'getConnectedSSID', []);
  },

  getCurrentBSSID: function (win, fail) {
      if (typeof win != "function") {
          console.log("getCurrentSSID first parameter must be a function to handle SSID.");
          return;
      }
      cordova.exec(win, fail, 'iOSWifiConnect', 'getConnectedBSSID', []);
  },

};

module.exports = iOSWifiConnect;
