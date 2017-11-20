var iOSWifiConnect = {

    connectNetwork: function (ssid, ssidPassword, win, fail) {
        cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', [
            {
                "Ssid": ssid,
                "Password": ssidPassword
            }]);
    }

};

module.exports = iOSWifiConnect;
