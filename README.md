# Cordova Network Manager

##### Latest Stable Release: v2.3.0
##### Latest Dev Release: v2.3.1 (13/03/2018)

Cordova Network Manager enables Wifi management for both Android and iOS applications within Cordova/Phonegap projects.

iOS has limited functionality as Apple's WifiManager equivalent is only available  as a private API. Any app that used these features would not be allowed on the app store.

Contact @arsenal942 via GitHub or discord at: Nomm#0176

# Global Functions
These are functions that can be used by both Android and iOS applications
```javascript
cordovaNetworkManager.getConnectedSSID(success, fail)
```
```javascript
cordovaNetworkManager.getConnectedBSSID(success, fail)
```

# iOS Functions
For functionality, you need to note the following:
 - Connect/Disconnect only works for iOS11+
 - Can't run in the simulator so you need to attach an actual device when building with xCode
 - Need to add the 'HotspotConfiguration' and 'NetworkExtensions' capabilities to your xCode project

```javascript
cordovaNetworkManager.iOSConnectNetwork(ssid, ssidPassword, success, fail)
```
```javascript
cordovaNetworkManager.iOSDisconnectNetwork(ssid, success, fail)
```

# Android Functions
Based off the original [WifiWizard](https://github.com/hoerresb/WifiWizard) however will undergo a rework. 

```javascript
cordovaNetworkManager.androidConnectNetwork(ssid, ssidToDisable, success, fail)
```
 - 'ssidToDisable' is a parameter that tells the method what network we need to disable.
```javascript
cordovaNetworkManager.androidDisconnectNetwork(ssid, ssidToEnable, success, fail)
```
 - 'ssidToEnable' is a parameter that tells the method what network we need to enable. 'androidConnectNetwork' disables the devices current SSID to avoid the issue whereby Android OS just connects back to the already specified network.
```javascript
cordovaNetworkManager.formatWifiConfig(ssid, password, algorithm)
```
```javascript
cordovaNetworkManager.formatWPAConfig(ssid, password)
```
```javascript
cordovaNetworkManager.addNetwork(wifi, success, fail)
```
```javascript
cordovaNetworkManager.removeNetwork(wifi, success, fail)
```
```javascript
cordovaNetworkManager.listNetworks(success, fail)
```
```javascript
cordovaNetworkManager.startScan(success, fail)
```
```javascript
cordovaNetworkManager.getScanResults([options], success, fail)
```
```javascript
cordovaNetworkManager.isWifiEnabled(success, fail)
```
```javascript
cordovaNetworkManager.setWifiEnabled(enabled, success, fail)
```

### Installation

##### Master
Run ```cordova plugin add https://github.com/arsenal942/Cordova-Network-Manager``` 

This plugin is in active development. If you are wanting to have the latest and greatest stable version, then run the 'Releases' command below.

##### Releases
Run ```cordova plugin add cordovanetworkmanager@2.2.0```

License
----

MIT
