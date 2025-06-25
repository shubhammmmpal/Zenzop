import ReactNativeHapticFeedback from "react-native-haptic-feedback";

export function HapticFeedbackPress() {
    const hapticOptions = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: true,
    };

    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);
}