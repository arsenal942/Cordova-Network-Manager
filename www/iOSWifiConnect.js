var iOSWifiConnect = {

    connectNetwork: function (ssid, ssidPassword, win, fail) {
        console.log("Plugin ConnectNetwork SSID: " + ssid);
        console.log("Plugin ConnectNetwork SsidPassword: " + ssidPassword);
        cordova.exec(win, fail, 'iOSWifiConnect', 'connectNetwork', [ssid], [ssidPassword]);
    }

};

module.exports = iOSWifiConnect;
