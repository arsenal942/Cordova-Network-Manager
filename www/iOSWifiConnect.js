var iOSWifiConnect = {

    connectNetwork: function (ssid, ssidPassword, win, fail) {
        cordova.exec(win, fail, "iOSWifiConnect", "connectNetwork", [
            {
                "Ssid": ssid,
                "Password": ssidPassword
            }]);
    },

    disconnectNetwork: function (ssid, win, fail) {
        cordova.exec(win, fail, "iOSWifiConnect", "disconnectNetwork", [
            {
                "Ssid": ssid
            }]);
    },

    getCurrentSSID: function(win, fail) {
        if (typeof win != "function") {
            console.log("getCurrentSSID first parameter must be a function to handle SSID.");
            return;
        }
        cordova.exec(win, fail, "iOSWifiConnect", "getConnectedSSID", []);
    },
    
    getCurrentBSSID: function(win, fail) {
        if (typeof win != "function") {
            console.log("getCurrentSSID first parameter must be a function to handle SSID.");
            return;
        }
        cordova.exec(win, fail, "iOSWifiConnect", "getConnectedBSSID", []);
    },

};

module.exports = iOSWifiConnect;
