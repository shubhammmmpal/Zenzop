import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reduxMmkvStorage } from './ReduxMmkvStorage';
import logger from 'redux-logger';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import CartSlice from './slice/CartSlice';

const combinedRootReducer = combineReducers({
  cart: CartSlice,
});

export type RootState = ReturnType<typeof combinedRootReducer>;

const rootReducer = (state: RootState | any, action: PayloadAction) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combinedRootReducer(state, action);
};

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'grocery-cart',
  storage: reduxMmkvStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['cart'], // only persist cart
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistRootReducer,
  middleware: gDM => gDM({ serializableCheck: false }).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
