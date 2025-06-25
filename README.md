React Native Project

This is a new React Native project, bootstrapped using @react-native-community/cli.

Getting Started



Note: Make sure you have completed the Set Up Your Environment guide before proceeding.

Prerequisites





Install Node.js (version 14 or later recommended).



Install a Java Development Kit (JDK) version 11 or later for Android development.



Install Android Studio or Xcode for Android and iOS development, respectively.



Install the required SDKs and emulators/simulators as per the environment setup guide.

Step 1: Start Metro

First, you will need to run Metro, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

# Using npm
npm start

# OR using Yarn
yarn start

Step 2: Build and Run Your App

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

Android

# Using npm
npm run android

# OR using Yarn
yarn android

iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

bundle install

Then, and every time you update your native dependencies, run:

bundle exec pod install

For more information, please visit the CocoaPods Getting Started guide.

# Using npm
npm run ios

# OR using Yarn
yarn ios

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

Alternative: Build from IDE





Android: Open the project in Android Studio and click "Run" to build and deploy.



iOS: Open ios/YourProject.xcworkspace in Xcode and press Cmd ⌘ + R to run.

Step 3: Modify Your App

Now that you have successfully run the app, let's make changes!

Open App.tsx in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by Fast Refresh.

Force Reload

To forcefully reload and reset the state of your app:





Android: Press the R key twice or select "Reload" from the Dev Menu, accessed via Ctrl + M (Windows/Linux) or Cmd ⌘ + M (macOS).



iOS: Press Cmd ⌘ + R in iOS Simulator.

Step 4: Additional Tools





Debugging: Use React Native Debugger or Chrome Developer Tools (Cmd ⌘ + D or Ctrl + D to open Dev Menu, then select "Debug").



Linting: Run npm run lint or yarn lint to check code quality (if configured).



Testing: Add tests with Jest by running npm test or yarn test (configure as needed).

Video Tutorial

Watch this video to see the setup process in action:



(Note: Replace the src URL with the actual URL of your video tutorial.)

Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

Now What?





If you want to add this new React Native code to an existing application, check out the Integration guide.



If you're curious to learn more about React Native, check out the docs.

Troubleshooting

If you're having issues getting the above steps to work, see the Troubleshooting page.





Metro Not Starting: Ensure Node.js is installed and the port (default 8081) is not in use.



Build Errors: Check for missing dependencies or SDK versions in Android Studio/Xcode.



Simulator/Emulator Issues: Verify the device is running and correctly configured.

Learn More

To learn more about React Native, take a look at the following resources:





React Native Website - learn more about React Native.



Getting Started - an overview of React Native and how to set up your environment.



Learn the Basics - a guided tour of the React Native basics.



Blog - read the latest official React Native Blog posts.



@facebook/react-native - the Open Source GitHub repository for React Native.