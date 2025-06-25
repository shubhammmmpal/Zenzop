// FoodDeliveryModuleHeader.h
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(FoodDelivery, NSObject)

RCT_EXTERN_METHOD(startActivity);
RCT_EXTERN_METHOD(endActivity);
RCT_EXTERN_METHOD(updateActivityWithName:(NSString *)name orderDetails:(NSString *)orderDetails price:(NSString *)price etaName:(NSString *)etaName etaTime:(NSString *)etaTime progressStage:(NSInteger)progressStage);

@end
