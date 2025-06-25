
export const colors = {
  black: "#000000",
  black_800: "#1b1911",
  black_700: "#111A16",
  black_600: "#272025",
  black_500: "#191919",
  black_400: "#262626",
  black_1D1: "#1D130C",
  black_300: "#161618",
  ofwhite: "#fffae5",
  brown: "#533d0a",
  white: "#ffffff",
  yellow: "#fceb00",
  grey_E8E8: "#E8E8E8",
  yellow_500: "#fceb0015",
  yellow_200: "#2A2716",
  gray: "#B7B7B7",
  gray_900: "#8F8D8D",
  redEC48: "#EC4856",
  gray_800: "#858585",
  white_800: "#F4F6FA",
  unfilledColor: "#d6d6d621",
  filledRating: "#EDB82A",
  orange: "#ED7A2D",
  green: "#39A747",
  light_green: "#50BF5B",
  pink_50: "#B7255F50",
  red: "red",
  red_FF6C6C: "#FF6C6C",
  linearMainFirst: "#260F01",
  flashCardOrange: "rgba(168, 84,34, 1)",
  flashCardlightBlack: "#151515",
  walletLinearMainFirst: "#453D2E",
  linearMainSecond: "#000000",
  linearblue: "#535F82",
  black_0E: "#0E0E0E",
  grey_EEEE: "#EEEEEE",
  grey_6B6B: "#6B6B6B",
  grey_E9E9: "#E9E9E9",
  black1212: "#121212",
  grey9898: "#F6F6F6",
  red_EC4856: "#EC4856",
  black_36: "#363636",
  white_F5F5: "#F5F5F5",
  BLACK33: "#333333",
  yellowFCEB: "#FCEB00",
  black_1C1C1C: "#1C1C1C",
  redOutLine764900: "#764900",
  black_1A1919: "#1A1919",
  black_17191B: "#17191B",
  black_1D1F21: "#1D1F21",
  black_484B4D: "#484B4D",
  videoRed: "#FF2A2A",
  blueNavy: "#2F62E6",
  errorRed: "#FF3357",
  black_0D0D0D: "#0D0D0D",
  goldenColor: "#C1A576",
};


export const graySteps = 8
// latest grey color to change all screens background and top bar
export function grayStep(step: number, alpha: number = 1.0): string {
  if (step > graySteps) {
    console.warn(
      `function getGray called with step greater than configured steps. Using ${graySteps} instead.`,
    )
    step = graySteps
  } else if (step < 0) {
    console.warn(
      'function getGray called with step less than zero. Using 0 instead.',
    )
    step = 0
  }
  return `hsla(0, 0%, ${(1 / graySteps) * 100 * (graySteps - step)}%, ${alpha})`
  // return latestGrey
}

// export const black1212 = '#121212'
// export const grey9898 = '#989898'