var iOSWifiConnect = {

    connectNetwork: function (ssid, ssidPassword, networkIsWep, win, fail) {
        console.log("Plugin ConnectNetwork SSID: " + ssid);
        console.log("Plugin ConnectNetwork SsidPassword: " + ssidPassword);
        cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', [
            {
                "Ssid": ssid,
                "Password": ssidPassword,
                "IsWep": networkIsWep
            }]);
    }

};

module.exports = iOSWifiConnect;
