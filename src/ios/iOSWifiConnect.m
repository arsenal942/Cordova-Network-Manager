#import "iOSWifiConnect.h"
#import <SystemConfiguration/CaptiveNetwork.h>
#import <NetworkExtension/NetworkExtension.h>  
#import <CoreFoundation/CoreFoundation.h>

@implementation iOSWifiConnect

- (void)connectNetwork:(CDVInvokedUrlCommand*)command {
    CDVPluginResult *pluginResult = nil;

	NSString * ssidString;
	NSString * passwordString;
	NSDictionary* options = [[NSDictionary alloc]init];

	options = [command argumentAtIndex:0];
	ssidString = [options objectForKey:@"Ssid"];
	passwordString = [options objectForKey:@"Password"];

	if (@available(iOS 11.0, *)) {
	    if (ssidString && [ssidString length]) {
			NEHotspotConfiguration *configuration = [[NEHotspotConfiguration
				alloc] initWithSSID:ssidString 
					passphrase:passwordString 
						isWEP:(BOOL)false];

			configuration.joinOnce = YES;
			[[NEHotspotConfigurationManager sharedManager] applyConfiguration:configuration completionHandler:nil];
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:ssidString];
		} else {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"SSID Not provided"];
		}
	} else {
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"iOS 11+ not available"];
	}

    [self.commandDelegate sendPluginResult:pluginResult
                                callbackId:command.callbackId];
}

- (void)isWifiEnabled:(CDVInvokedUrlCommand*)command {
    CDVPluginResult *pluginResult = nil;
	Reachability *reachability = [Reachability reachabilityForInternetConnection];
	[reachability startNotifier];

	NetworkStatus status = [reachability currentReachabilityStatus];

	if (status == ReachableViaWiFi) {
		// WiFi
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:status];
	} else {
		// Either WiFi is off or we are not connected to a WiFi network.
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Wifi is not enabled."];
	}

    [self.commandDelegate sendPluginResult:pluginResult
                                callbackId:command.callbackId];
}

@end
