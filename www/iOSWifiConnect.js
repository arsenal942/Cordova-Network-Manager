var iOSWifiConnect = {

    connectNetwork: function (ssid, ssidPassword, win, fail) {
        console.log("Plugin ConnectNetwork SSID: " + ssid);
        console.log("Plugin ConnectNetwork SsidPassword: " + ssidPassword);
        cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', [ssid], [ssidPassword]);
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
    }

};

module.exports = iOSWifiConnect;
