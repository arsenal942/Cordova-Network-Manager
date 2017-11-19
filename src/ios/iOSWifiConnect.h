#import <Cordova/CDVPlugin.h>
#import <Cordova/CDV.h>

@interface iOSWifiConnect : CDVPlugin {
}

// The hooks for our plugin commands
- (void)connectNetwork:(CDVInvokedUrlCommand *)command;
- (void)isWifiEnabled:(CDVInvokedUrlCommand *)command;
- (void)getConnectedSSID:(CDVInvokedUrlCommand*)command;
- (void)getConnectedBSSID:(CDVInvokedUrlCommand*)command;

@end
