var iOSWifiConnect = {

    connectNetwork: function (ssid, ssidPassword, win, fail) {
        cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', [
            {
                "Ssid": ssid,
                "Password": ssidPassword
            }]);
    },

    isWifiEnabled: function (ssid, ssidPassword, win, fail) {
        cordova.exec(win, fail, 'iOSWifiConnect', 'isWifiEnabled');
    }

};

module.exports = iOSWifiConnect;
