#import "iOSWifiConnect.h"
#import <SystemConfiguration/CaptiveNetwork.h>
#import <NetworkExtension/NetworkExtension.h>  

#import <Cordova/CDVAvailability.h>

@implementation iOSWifiConnect

- (void)pluginInitialize {
}

- (void)connectNetwork:(CDVInvokedUrlCommand*)command {
	NSString* ssid = [command argumentAtIndex:0];
	NSString* password = [command argumentAtIndex:1];

    if (ssid && [ssid length]) {
		NEHotspotConfiguration *configuration = [[NEHotspotConfiguration
			alloc] initWithSSID:(NSString *)ssid 
				passphrase:(NSString *)password 
                    isWEP:(BOOL)true;

		configuration.joinOnce = YES;

		[[NEHotspotConfigurationManager sharedManager] applyConfiguration:configuration completionHandler:nil];

		if (NEHotspotConfigurationManager) {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:ssid];
		} else {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Not available"];
		}	
	} else {
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"SSID Not provided"];
	}

    [self.commandDelegate sendPluginResult:pluginResult
                                callbackId:command.callbackId];
}

@end
