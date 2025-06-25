import { Dimensions, Platform } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

// Check for Platform
export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

// Make this a constant rather than a function for use in styles
export const isIPhoneSE = (() => {
    if (!isIOS) return false;
    
    const { height } = Dimensions.get('window');
    // Check only height since width can vary with orientation
    // iPhone SE has a height of 667 points
    return height <= 667; // Use <= to catch SE and similar small devices
})();

// Responsive Dimensions
const width = 393;
const screenWidth = width / 100;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export function rw(n) {
    return responsiveWidth(n / screenWidth);
}


