
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNExcSpec.h"

@interface Exc : NSObject <NativeExcSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Exc : NSObject <RCTBridgeModule>
#endif

@end
