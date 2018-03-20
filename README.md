#  Cordova Network Manager

  

#####  Latest Stable Release: v2.4.0 (20/03/2018)

#####  Latest Dev Release: v2.4.0 (20/03/2018)

  

Cordova Network Manager enables Wifi management for both Android and iOS applications within Cordova/Phonegap projects.

iOS has limited functionality as Apple's WifiManager equivalent is only available as a private API. Any app that used these features would not be allowed on the app store.

Contact @arsenal942 via GitHub or discord at: Nomm#0176

  

#  Global Functions

These are functions that can be used by both Android and iOS applications.

```javascript

cordovaNetworkManager.getCurrentSSID(success, fail)

```
- Returns the current SSID and passes to the success callback.

```javascript

cordovaNetworkManager.getCurrentBSSID(success, fail)

```
- Returns the current BSSID and passes to the success callback.

  

#  iOS Functions

iOS functionality is limited. It is important to understand the following points.

-  iOSConnectNetwork() & iOSDisconnectNetwork() only work in iOS version 11 or greater. You will have to rely on configuration profiles for backwards compatibility prior to this. Apple only released the functionality to perform 'hotspot configurations' in October 2017.

- This will not run in the xCode simulator and requires a physical iOS device to be connected to the machine when building. If you don't attach a physical device, the build will fail.

- Capabilities 'HotspotConfiguration' and 'NetworkExtensions' needed to be enabled/added to the xCode project prior to building.

```javascript

cordovaNetworkManager.iOSConnectNetwork(ssid, ssidPassword, success, fail)

```
- SSID is the network to connect to
- Password is the password of the given SSID

```javascript

cordovaNetworkManager.iOSDisconnectNetwork(ssid, success, fail)

```
- SSID is the network to disconnect from

  

#  Android Functions
Android functionality was based on the original \[WifiWizard\](https://github.com/hoerresb/WifiWizard). This repository is stale and out-dated and Cordova-Network-Manager has provided some much needed improvements and updates to the Android platform.


```javascript

cordovaNetworkManager.androidConnectNetwork(ssid, ssidToDisable, success, fail)

```
- ssidToDisable is an optional parameter that will disable the provided SSID to ensure a reconnection doesn't occur.
- If no SSID is required to be disabled, pass in an empty string: "" 
- Android OS has an issue whereby it randomly connects back to specified networks/priority networks even if you tell them to connect to another network

```javascript

cordovaNetworkManager.androidDisconnectNetwork(ssid, ssidToEnable, success, fail)

```
- ssidToEnable is an optional parameter that will enable the provided SSID. It should only be used to enable a previously disabled network.
- If no SSID is required to be enabled, pass in an empty string

```javascript

cordovaNetworkManager.formatWifiConfig(ssid, password, algorithm)

```
- Formats the wifi configuration information into a JSON for use with the addNetwork function. Currently, only WPA is supported for the `algorithm` value.

```javascript

cordovaNetworkManager.formatWPAConfig(ssid, password)

```
- Is a helper method that returns an object which can be used to add a WPA wifi network.

```javascript

cordovaNetworkManager.addNetwork(wifi, success, fail)

```
- Adds the network to the list of available networks that the user can log into. `wifi` needs to be an object as formatted by formatWifiConfig. `success` and `fail` are callback functions to be executed based on the result of the call.
```javascript

cordovaNetworkManager.removeNetwork(wifi, success, fail)

```
- Removes the network with the given SSID. `success` and `fail` are callback functions.
```javascript

cordovaNetworkManager.listNetworks(success, fail)

```
- Retrieves a list of the configured networks as an array of strings and passes them to the function listHandler.
```javascript

cordovaNetworkManager.startScan(success, fail)

```
- Starts WiFi scanning. `success` is called when scanning has started.
```javascript

cordovaNetworkManager.getScanResults(\[options\], success, fail)

```
- Retrieves a list of the available networks as an array of objects and passes them to the function listHandler. The format of the array is:

```
networks = [
    {   "level": signal_level, // raw RSSI value
        "SSID": ssid, // SSID as string, with escaped double quotes: "\"ssid name\""
        "BSSID": bssid // MAC address of WiFi router as string
        "frequency": frequency of the access point channel in MHz
        "capabilities": capabilities // Describes the authentication, key management, and encryption schemes supported by the access point.
    }
]
```

```javascript

cordovaNetworkManager.isWifiEnabled(success, fail)

```
- Retrieves the current Wifi Enabled status. Passes `true` or `false`.
```javascript

cordovaNetworkManager.setWifiEnabled(enabled, success, fail)

```
- Sets the  WiFi status. `enabled` is a Boolean type, so to disable the Wifi, you'd execute `cordovaNetworkManager.setWifiEnabled(false, success, fail);`
  

###  Installation

####  Master

Run ```cordova plugin add https://github.com/arsenal942/Cordova-Network-Manager```

This plugin is in active development. If you are wanting to have the latest and greatest stable version, then run the 'Releases' command below.

  

####  Releases

Run ```cordova plugin add cordovanetworkmanager@2.3.0```

  

#### License
- MIT