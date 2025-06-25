import { useWindowDimensions, Platform, PixelRatio } from 'react-native';
import { useMemo } from 'react';

// Base widths for different device categories
const DESIGN_WIDTHS = {
    ios: {
        small: 375, // iPhone SE
        medium: 390, // iPhone 14/15
        large: 428, // iPhone Pro Max
    },
    android: {
        small: 360, // Standard Android
        medium: 392, // Pixel phones
        large: 412, // Larger Android phones
    }
};

type ScaleConfig = {
    minScale?: number;
    maxScale?: number;
};

export const useResponsiveFonts = (config?: ScaleConfig) => {
    const { width: screenWidth } = useWindowDimensions();

    // Default configuration
    const defaultConfig = {
        minScale: 0.85,
        maxScale: 1.15,
    };

    // Merge default config with provided config
    const finalConfig = { ...defaultConfig, ...config };

    // Get base width based on platform and screen size
    const getBaseWidth = useMemo(() => {
        const widths = DESIGN_WIDTHS[Platform.OS === 'ios' ? 'ios' : 'android'];

        // Choose base width based on screen width
        if (screenWidth <= 375) return widths.small;
        if (screenWidth >= 412) return widths.large;
        return widths.medium;
    }, [screenWidth]);

    // Calculate scale factor based on width
    const scale = useMemo(() => {
        const baseWidth = getBaseWidth;
        const widthScale = screenWidth / baseWidth;

        // Clamp the scale factor between min and max
        return Math.min(
            Math.max(widthScale, finalConfig.minScale),
            finalConfig.maxScale
        );
    }, [screenWidth, getBaseWidth, finalConfig.minScale, finalConfig.maxScale]);

    // Get responsive font size
    const getResponsiveSize = (size: number) => {
        let finalSize = size * scale;

        // Round to nearest pixel for better rendering
        return Math.round(PixelRatio.roundToNearestPixel(finalSize));
    };

    // Common font size presets
    const fontSizes = useMemo(() => ({
        xs: getResponsiveSize(12),
        sm: getResponsiveSize(14),
        md: getResponsiveSize(16),
        lg: getResponsiveSize(18),
        xl: getResponsiveSize(20),
        xxl: getResponsiveSize(24),
        xxxl: getResponsiveSize(32),
    }), [scale]);

    // Typography system
    const typography = useMemo(() => ({
        h1: getResponsiveSize(32),
        h2: getResponsiveSize(28),
        h3: getResponsiveSize(24),
        h4: getResponsiveSize(20),
        body1: getResponsiveSize(16),
        body2: getResponsiveSize(14),
        caption: getResponsiveSize(12),
        button: getResponsiveSize(16),
    }), [scale]);

    return {
        getResponsiveSize,
        fontSizes,
        typography,
        currentScale: scale,
        baseWidth: getBaseWidth,
    };
};
