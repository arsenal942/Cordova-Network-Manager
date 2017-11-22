iOS-Cordova-Network-Manager
======

A simple plugin that uses NEHotspotConfigurationManager for iOS11+ to directly connect to networks for cordova. Also contains a few other bits of functionality.

- iOS only

API:

- connectNetwork

 Example: 

	iOSWifiConnect.connectNetwork(ssidToConnectTo, ssidPassword, successCallbackFunction, errorCallbackFunction);
Note: //Success callback of the function simply fires when the function worked and NOT when the network has successfully connected. Simply run a timeout function that after 10seconds checks if the connected network is equal to the network you wanted to connect to.


- disconnectNetwork

 Example: 

	iOSWifiConnect.disconnectNetwork(ssidToDisconnect)
