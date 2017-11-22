Cordova-Network-Manager
======

Cordova Network Manager - API is a WIP

- iOS
- Android

API:

- connectNetwork

 Example: 

	cordovaNetworkManager.connectNetwork(ssidToConnectTo, ssidPassword, successCallbackFunction, errorCallbackFunction);
Note: //Success callback of the function simply fires when the function worked and NOT when the network has successfully connected. Simply run a timeout function that after 10seconds checks if the connected network is equal to the network you wanted to connect to.


- disconnectNetwork

 Example: 

	cordovaNetworkManager.disconnectNetwork(ssidToDisconnect)
