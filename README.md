This is a new React Native project, bootstrapped using @react-native-community/cli.

# Getting Started

**Note**: Ensure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding. This guide covers installing Node.js, Yarn/NPM, Android Studio, Xcode, and other dependencies.

## Prerequisites

- Node.js (v16 or higher recommended)
- Yarn (optional, for package management)
- JDK 11 (for Android development)
- Android Studio with an emulator or a physical Android device
- Xcode (for iOS development, macOS only) with an iOS Simulator or a physical iOS device
- Watchman (recommended for macOS users)
- Ruby (for CocoaPods on iOS)

, watch this walthrough : [Demo].

<table>
   <tr>
  <td><img src="Docs/video1.gif" alt="Demo video" height="400px" style="margin-left:10px" /></td>
  </tr>
</table>

## Step 1: Start Metro

Metro is the JavaScript bundler for React Native. To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

This command starts the Metro server. Keep this terminal running while developing.

## Step 2: Install Dependencies

Before running the app, ensure all dependencies are installed:

```sh
# Using npm
npm install

# OR using Yarn
yarn
```

### iOS-Specific Setup

For iOS development, install CocoaPods dependencies. Run the following commands from the project root:

```sh
# Install CocoaPods if not already installed
bundle install

# Install pods
cd ios && bundle exec pod install && cd ..
```

For more information, visit the [CocoaPods Getting Started Guide](https://guides.cocoapods.org/using/getting-started.html).

## Step 3: Build and Run Your App

With Metro running, open a new terminal window/pane from the root of your React Native project and use one of the following commands to build and run your app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

Ensure an Android emulator is running or a physical device is connected.

### iOS

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

Ensure an iOS Simulator is running or a physical iOS device is connected (macOS only).

If everything is set up correctly, your app should launch in the emulator/simulator or on your device. Alternatively, you can build and run the app directly from Android Studio or Xcode.

## Step 4: Modify Your App

To make changes to your app:

1. Open `App.tsx` in your preferred text editor (e.g., Visual Studio Code).
2. Edit the file and save your changes.
3. The app will automatically reload, thanks to [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

To forcefully reload the app (e.g., to reset state):

- **Android**: Press <kbd>R</kbd> twice or select **"Reload"** from the Dev Menu (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows/Linux, <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> on macOS).
- **iOS**: Press <kbd>R</kbd> in the iOS Simulator or use the Dev Menu.

## Step 5: Debugging

- **Dev Menu**: Access debugging options via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Android) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (iOS).
- **React Developer Tools**: Install via `npm install -g react-devtools` and run `react-devtools` to inspect components.
- **Console Logs**: Use `console.log` in your code and view output in the Metro terminal or browser's DevTools (open `http://localhost:8081/debugger-ui`).
- **Flipper**: For advanced debugging, integrate [Flipper](https://fbflipper.com/) for network, logs, and layout inspection.

## Step 6: Testing

To run tests, use:

```sh
# Using npm
npm test

# OR using Yarn
yarn test
```

Tests are typically written using Jest and React Native Testing Library. Check `package.json` for test scripts.

## Step 7: Building for Production

To create a production build:

### Android

1. Generate a release APK or AAB:
   ```sh
   cd android && ./gradlew assembleRelease
   ```
2. Find the output in `android/app/build/outputs/apk/release/`.

### iOS

1. Open `ios/YourApp.xcworkspace` in Xcode.
2. Select **Product > Archive** to create an IPA.
3. Follow Xcode prompts to export for distribution.

For detailed guides, see [Publishing to Google Play](https://reactnative.dev/docs/signed-apk-android) and [Publishing to App Store](https://reactnative.dev/docs/publishing-to-app-store).

## Congratulations! 🎉

You've successfully set up, run, and modified your React Native app! 🥳

## Troubleshooting

If you encounter issues, check the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting). Common fixes:

- **Metro not starting**: Clear cache with `npm start -- --reset-cache` or `yarn start --reset-cache`.
- **Android build fails**: Ensure `ANDROID_HOME` is set and Gradle is updated.
- **iOS build fails**: Verify CocoaPods installation and run `pod install` again.
- **Emulator/Simulator issues**: Restart the emulator or try a different device profile.

## Learn More

Explore these resources to deepen your React Native knowledge:

- [React Native Website](https://reactnative.dev) - Official documentation and guides.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - Environment setup overview.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - Guided tour of React Native basics.
- [Blog](https://reactnative.dev/blog) - Latest official React Native blog posts.
- [React Native GitHub](https://github.com/facebook/react-native) - Open-source repository.
- [Community Resources](https://reactnative.dev/community/overview) - Forums, Discord, and more.

## Integrating with Existing Apps

To add React Native to an existing native app, follow the [Integration Guide](https://reactnative.dev/docs/integration-with-existing-apps).

## Contributing

To contribute to this project:

1. Fork the repository on GitHub.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Happy coding! 🚀