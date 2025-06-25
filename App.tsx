
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from "react-native-toast-message";
import { colors } from './src/utils/Colors';
import SplashPage from './src/screen/Splash/SplashPage';
import Routes from './src/navigation/Routes';
import store, { persistor } from './src/redux/Store';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const navigationRef: any = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };

  const toastConfig = {
    success: (props: BaseToastProps) => <BaseToast {...props} />,
    error: (props: BaseToastProps) => <ErrorToast {...props} />,
  };

  const Wrapper = Platform.OS === 'android' ? SafeAreaView : View;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Wrapper style={{ flex: 1, backgroundColor: 'black' }}>
              <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={"light-content"}
              />
              <NavigationContainer ref={navigationRef} theme={MyTheme}>
                <BottomSheetModalProvider>
                  {loading ? <SplashPage /> : <Routes />}
                </BottomSheetModalProvider>
              </NavigationContainer>
              <Toast config={toastConfig} visibilityTime={1500} />
            </Wrapper>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
