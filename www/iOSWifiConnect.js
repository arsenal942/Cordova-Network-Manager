var iOSWifiConnect = {

    connectNetwork: function (ssid, ssidPassword, win, fail) {
        cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', [
            {
                "Ssid": ssid,
                "Password": ssidPassword
            }]);
    },

    disconnectNetwork: function (ssid, win, fail) {
        cordova.exec(win, fail, 'iOSWifiConnect', 'disconnectNetwork', [
            {
                "Ssid": ssid
            }]);
    },

};

module.exports = iOSWifiConnect;
