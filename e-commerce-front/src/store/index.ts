import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/categotiesSlice";
import { productsSlice } from "./products/productsSlice";
import { cartSlice } from "./cart/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { wishSlice } from "./cart copy/wishSlice";

const cartPersistentConfig = {
  key: "cartSlice",
  storage: storage,
  whitelist: ["items"],
};
const wishPersistentConfig = {
  key: "wishSlice",
  storage: storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  categoriesSlice: categoriesSlice.reducer,
  productsSlice: productsSlice.reducer,
  wishSlice: persistReducer(wishPersistentConfig, wishSlice.reducer),
  cartSlice: persistReducer(cartPersistentConfig, cartSlice.reducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };
