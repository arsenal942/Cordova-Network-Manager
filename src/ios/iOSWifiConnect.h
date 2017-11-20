#import <Cordova/CDV.h>

@interface iOSWifiConnect : CDVPlugin 

// The hooks for our plugin commands
- (void)connectNetwork:(CDVInvokedUrlCommand *)command;
- (bool)isWifiEnabled:(CDVInvokedUrlCommand*)command;

@end
