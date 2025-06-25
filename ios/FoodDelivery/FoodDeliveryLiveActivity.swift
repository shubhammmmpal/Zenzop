import ActivityKit
import WidgetKit
import SwiftUI

struct FoodDeliveryAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var leadingName: String
        var orderDetails: String
        var price: String
        var etaName: String
        var etaTime: String // e.g., "8 min"
        var progressStage: Int = 1 // 0: Preparing, 1: On the Way, 2: At the Address, 3: Delivered
    }

    var name: String
}

struct FoodDeliveryLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: FoodDeliveryAttributes.self) { context in
            // Lock screen/banner UI with horizontal progress
            VStack(spacing: 10) {
                HStack(spacing: 10) {
                    Image("Burger")
                        .resizable()
                        .scaledToFit()
                        .frame(width: 20, height: 20)
                    VStack(alignment: .leading, spacing: 2) {
                        Text(context.state.leadingName)
                            .font(.caption)
                            .foregroundColor(.gray)
                        Text(context.state.orderDetails)
                            .font(.body)
                            .foregroundColor(.white)
                    }
                    Spacer()
                    Text(context.state.price)
                        .font(.title3)
                        .foregroundColor(.white)
                        .bold()
                }
                GeometryReader { geometry in
                    ZStack(alignment: .leading) {
                        // Full progress bar background
                        Rectangle()
                            .frame(width: geometry.size.width, height: 4)
                            .foregroundColor(.gray)
                        // Dynamic progress
                        Rectangle()
                            .frame(width: min(CGFloat(context.state.progressStage) / 3 * geometry.size.width, geometry.size.width), height: 4)
                            .foregroundColor(.cyan)
                            .offset(x: geometry.size.width * 0.0267) // Approx 4/150 of total width for dot center
                        // Overlay dots and text
                        HStack(spacing: geometry.size.width * 0.3333) { // 50/150 of total width
                            progressDotAndText(stage: 0, currentStage: context.state.progressStage, text: "Preparing")
                            progressDotAndText(stage: 1, currentStage: context.state.progressStage, text: "On the Way")
                            progressDotAndText(stage: 2, currentStage: context.state.progressStage, text: "At the Address")
                            progressDotAndText(stage: 3, currentStage: context.state.progressStage, text: "Delivered")
                        }
                    }
                }
                .frame(height: 20) // Ensure GeometryReader has a height
                HStack(spacing: 10) {
                    Image("Person")
                        .resizable()
                        .scaledToFit()
                        .frame(width: 30, height: 30)
                    VStack(alignment: .leading) {
                        Text(context.state.etaName)
                            .font(.caption)
                            .foregroundColor(.white)
                        Text(context.state.etaTime)
                            .font(.body)
                            .bold()
                            .foregroundColor(.cyan)
                    }
                    Spacer()
                    Image("Message")
                        .resizable()
                        .scaledToFit()
                        .frame(width: 30, height: 30)
                    Image("Caller")
                        .resizable()
                        .scaledToFit()
                        .frame(width: 30, height: 30)
                }
            }
            .activityBackgroundTint(Color.black)
            .activitySystemActionForegroundColor(Color.white)
        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI
                DynamicIslandExpandedRegion(.leading) {
                    HStack(alignment: .top, spacing: 8) {
                        Image("Burger")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 20, height: 20)
                        VStack(alignment: .leading, spacing: 2) {
                            Text(context.state.leadingName)
                                .font(.system(size: 12, weight: .medium))
                                .foregroundColor(.gray)
                                .lineLimit(1)
                            Text(context.state.orderDetails)
                                .font(.system(size: 14, weight: .medium))
                                .fontWidth(.condensed)
                                .truncationMode(.tail)
                        }
                    }
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text(context.state.price)
                        .font(.system(size: 20, weight: .medium))
                        .bold()
                }
                DynamicIslandExpandedRegion(.bottom) {
                    VStack(spacing: 15) {
                        GeometryReader { geometry in
                          ZStack(alignment: .leading) {
                                // Full progress bar background
                                Rectangle()
                                    .frame(width: geometry.size.width - 30, height: 4)
                                    .foregroundColor(.gray)
                                    .offset(y: -12) 
                                // Dynamic progress
                                Rectangle()
                              .frame(width: min(CGFloat(context.state.progressStage) / 2.8 * geometry.size.width, geometry.size.width) - 15, height: 4)
                                    .foregroundColor(.cyan)
                                    .offset(y: -12) // Approx 4/150 of total width
                              
                                // Overlay dots and text
                                HStack(spacing: geometry.size.width * 0.28) { // 50/150 of total width
                                    progressDotAndText(stage: 0, currentStage: context.state.progressStage, text: "Preparing")
                                    progressDotAndText(stage: 1, currentStage: context.state.progressStage, text: "On the Way")
                                    progressDotAndText(stage: 2, currentStage: context.state.progressStage, text: "At the Address")
                                    progressDotAndText(stage: 3, currentStage: context.state.progressStage, text: "Delivered")
                                }
                            }.padding(.horizontal, 15)
                        }
                        .frame(height: 20)
                        HStack(spacing: 15) {
                            Image("Person")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 30, height: 30)
                            VStack(alignment: .leading) {
                                Text(context.state.etaName)
                                    .font(.caption)
                                    .foregroundColor(.white)
                                Text(context.state.etaTime)
                                    .font(.body)
                                    .bold()
                                    .foregroundColor(.cyan)
                            }
                            Spacer()
                            Image("Message")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 30, height: 30)
                            Image("Caller")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 30, height: 30)
                        }
                        .padding(.horizontal, 15)
                        Text("Tracking your order...")
                            .font(.caption2)
                            .foregroundColor(.gray)
                            .padding(.top, 5)
                    }
                }
            } compactLeading: {
                Image("Burger")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 20, height: 20)
            } compactTrailing: {
                Text(context.state.etaTime)
                    .font(.caption)
                    .bold()
            } minimal: {
                Text("Min")
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

// Helper view for dot and text
private struct progressDotAndText: View {
    let stage: Int
    let currentStage: Int
    let text: String

    var body: some View {
        VStack {
            Circle()
                .frame(width: 8, height: 8)
                .foregroundColor(stage <= currentStage ? .cyan : .gray)
            Text(text)
                .font(.caption)
                .foregroundColor(stage <= currentStage ? .white : .gray)
        }
    }
}

// Function to update the activity
func updateActivity(activity: Activity<FoodDeliveryAttributes>) {
    let currentState = activity.contentState
    let newProgressStage = min(currentState.progressStage + 1, 3)
    let newETA: String
    switch newProgressStage {
    case 1: newETA = "5 min"
    case 2: newETA = "2 min"
    case 3: newETA = "Delivered"
    default: newETA = currentState.etaTime
    }

    let updatedState = FoodDeliveryAttributes.ContentState(
        leadingName: currentState.leadingName,
        orderDetails: currentState.orderDetails,
        price: currentState.price,
        etaName: currentState.etaName,
        etaTime: newETA,
        progressStage: newProgressStage
    )

    Task {
        await activity.update(using: updatedState)
    }
}
