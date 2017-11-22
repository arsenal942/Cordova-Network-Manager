iOS Wifi Connect - Cordova
======

A simple plugin that uses NEHotspotConfigurationManager for iOS11+ to directly connect to networks for cordova.

- iOS only

API:

- connectNetwork

 Example: 

		iOSWifiConnect.connectNetwork(ssidToConnectTo, ssidPassword,
            function() {
                //Success callback of the function
				//This simply fires when the function worked and NOT when the network has connected. Simply run a timeout function that after 10seconds checks if the connected network is equal to the network you wanted to connect to
            },
            function () {
				//Error callback of the function
				//Fires if the function failed for some reason
        });

- disconnectNetwork

 Example: 

		iOSWifiConnect.disconnectNetwork(ssidToDisconnect)
