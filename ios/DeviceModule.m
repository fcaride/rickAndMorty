//
//  DeviceModule.m
//  rickAndMorty
//
//  Created by Fernando Caride on 13/8/21.
//

#import <UIKit/UIKit.h>
#import "DeviceModule.h"

@implementation DeviceModule 

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceName:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *deviceName = [[UIDevice currentDevice] name];
  if (![deviceName isEqual:@""]) {
    resolve(deviceName);
  } else {
    reject(@"event_failure", @"no name returned", nil);
  }
}



@end
