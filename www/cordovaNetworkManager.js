/*
    MIT License

    Copyright (c) [2017] [Nicholas Clancy]

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */

/* This is the interface for the CordovaNetworkManager plugin. */

var cordovaNetworkManager = {

/*iOS and Android functions*/

    getCurrentSSID: function (win, fail) {
        if (typeof win != "function") {
            console.log("getCurrentSSID first parameter must be a function to handle SSID.");
            return;
        }
        cordova.exec(win, fail, "cordovaNetworkManager", "getConnectedSSID", []);
    },

    getCurrentBSSID: function (win, fail) {
        if (typeof win != "function") {
            console.log("getCurrentBSSID first parameter must be a function to handle BSSID.");
            return;
        }
        cordova.exec(win, fail, "cordovaNetworkManager", "getConnectedBSSID", []);
    },

/*iOS only functions*/

    iOSConnectNetwork: function (ssid, ssidPassword, win, fail) {
        cordova.exec(win, fail, "cordovaNetworkManager", "iOSConnectNetwork", [
            {
                "Ssid": ssid,
                "Password": ssidPassword
            }]);
    },

    iOSDisconnectNetwork: function (ssid, win, fail) {
        cordova.exec(win, fail, "cordovaNetworkManager", "iOSDisconnectNetwork", [
            {
                "Ssid": ssid
            }]);
    },

/*Android only functions*/

    formatWifiConfig: function (SSID, password, algorithm) {
        var wifiConfig = {
            SSID: cordovaNetworkManager.formatWifiString(SSID)
        };
        if (!algorithm && !password) {
            // open network
            wifiConfig.auth = {
                algorithm: "NONE"
            };
        } else if (algorithm === "WPA") {
            wifiConfig.auth = {
                algorithm: algorithm,
                password: cordovaNetworkManager.formatWifiString(password)
                // Other parameters can be added depending on algorithm.
            };
        }
        else if (algorithm === "New network type") {
            wifiConfig.auth = {
                algorithm: algorithm
                // Etc...
            };
        }
        else {
            console.log("Algorithm incorrect");
            return false;
        }
        return wifiConfig;
    },

    formatWPAConfig: function (SSID, password) {
        return cordovaNetworkManager.formatWifiConfig(SSID, password, "WPA");
    },

    formatWifiString: function (ssid) {
        if (ssid === undefined || ssid === null) {
            ssid = "";
        }
        ssid = ssid.trim();

        if (ssid.charAt(0) != '"') {
            ssid = '"' + ssid;
        }

        if (ssid.charAt(ssid.length - 1) != '"') {
            ssid = ssid + '"';
        }

        return ssid;
    },

    addNetwork: function (wifi, win, fail) {
        if (wifi !== null && typeof wifi === "object") {
            // Ok to proceed!
        }
        else {
            console.log("cordovaNetworkManager: Invalid parameter. Wifi not an object.");
        }

        var networkInformation = [];

        if (wifi.SSID !== undefined && wifi.SSID !== "") {
            networkInformation.push(wifi.SSID);
        }
        else {
            console.log("cordovaNetworkManager: No SSID given.");
            return false;
        }

        if (typeof wifi.auth == "object") {

            switch (wifi.auth.algorithm) {
            case "WPA":
                networkInformation.push("WPA");
                networkInformation.push(wifi.auth.password);
                break;
            case "NONE":
                networkInformation.push("NONE");
                break;
            case "Newly supported type":
                break;
            default:
                console.log("cordovaNetworkManager: authentication invalid.");
            }

        }
        else {
            console.log("cordovaNetworkManager: No authentication algorithm given.");
            return false;
        }

        cordova.exec(win, fail, "cordovaNetworkManager", "addNetwork", networkInformation);
    },

    removeNetwork: function (SSID, win, fail) {
        cordova.exec(win, fail, "cordovaNetworkManager", "removeNetwork", [cordovaNetworkManager.formatWifiString(SSID)]);
    },

    androidConnectNetwork: function (SSID, currentSSID, win, fail) {
        cordova.exec(win, fail, "cordovaNetworkManager", "androidConnectNetwork", [cordovaNetworkManager.formatWifiString(SSID), cordovaNetworkManager.formatWifiString(currentSSID)]);
    },

    androidDisconnectNetwork: function (SSID, currentSSID, win, fail) {
        cordova.exec(win, fail, "cordovaNetworkManager", "androidDisconnectNetwork", [cordovaNetworkManager.formatWifiString(SSID), cordovaNetworkManager.formatWifiString(currentSSID)]);
    },

    listNetworks: function (win, fail) {
        if (typeof win != "function") {
            console.log("listNetworks first parameter must be a function to handle list.");
            return;
        }
        cordova.exec(win, fail, "cordovaNetworkManager", "listNetworks", []);
    },

    getScanResults: function (options, win, fail) {
        if (typeof options === "function") {
            fail = win;
            win = options;
            options = {};
        }

        if (typeof win != "function") {
            console.log("getScanResults first parameter must be a function to handle list.");
            return;
        }

        cordova.exec(win, fail, "cordovaNetworkManager", "getScanResults", [options]);
    },

    startScan: function (win, fail) {
        if (typeof win != "function") {
            console.log("startScan first parameter must be a function to handle list.");
            return;
        }
        cordova.exec(win, fail, "cordovaNetworkManager", "startScan", []);
    },

    disconnect: function (win, fail) {
        if (typeof win != "function") {
            console.log("disconnect first parameter must be a function to handle list.");
            return;
        }
        cordova.exec(win, fail, "cordovaNetworkManager", "disconnect", []);
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
            fail, "cordovaNetworkManager", "isWifiEnabled", []
        );
    },

    setWifiEnabled: function (enabled, win, fail) {
        if (typeof win != "function") {
            console.log("setWifiEnabled second parameter must be a function to handle enable result.");
            return;
        }
        cordova.exec(win, fail, "cordovaNetworkManager", "setWifiEnabled", [enabled]);
    }


};

module.exports = cordovaNetworkManager;
