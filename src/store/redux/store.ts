import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import rootReducer from './RootReducer';

const preloadedState = {};

export const store = configureStore({ 
  reducer: rootReducer,
  preloadedState
}
);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch