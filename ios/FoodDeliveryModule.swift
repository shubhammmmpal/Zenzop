import Foundation
import ActivityKit

@objc(FoodDelivery)
class FoodDelivery: NSObject {
  
  @objc(startActivity)
  func startActivity() {
    do {
      if #available(iOS 16.1, *) {
        let foodDeliveryAttributes = FoodDeliveryAttributes(name: "Food Delivery")
        let foodDeliveryContentState = FoodDeliveryAttributes.ContentState(
            leadingName: "BurgerHouse",
            orderDetails: "Cheeseburger",
            price: "$19.90",
            etaName: "Kadir's ETA",
            etaTime: "8 min",
            progressStage: 1
        )
        let activity = try Activity<FoodDeliveryAttributes>.request(attributes: foodDeliveryAttributes, contentState: foodDeliveryContentState, pushType: nil)
      } else {
        print("Dynamic Island and live activities not supported")
      }
    } catch {
      print("there is some error")
    }
  }
  
  @objc(updateActivityWithName:orderDetails:price:etaName:etaTime:progressStage:)
  func updateActivity(name: String, orderDetails: String, price: String, etaName: String, etaTime: String, progressStage: Int) {
    do {
      if #available(iOS 16.1, *) {
        let foodDeliveryContentState = FoodDeliveryAttributes.ContentState(
            leadingName: name,
            orderDetails: orderDetails,
            price: price,
            etaName: etaName,
            etaTime: etaTime,
            progressStage: progressStage
        )
        Task {
          for activity in Activity<FoodDeliveryAttributes>.activities {
            await activity.update(using: foodDeliveryContentState)
          }
        }
      }
    } catch {
      print("some error")
    }
  }
  
  @objc(endActivity)
  func endActivity() {
    Task {
      if #available(iOS 16.1, *) {
        for activity in Activity<FoodDeliveryAttributes>.activities {
          await activity.end()
        }
      }
    }
  }
}
