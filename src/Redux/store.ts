import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./Categories/CategoriesSlice";
import Products from "./Products/ProductsSlice";
import Cart from "./Cart/CartSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const rootPersistConfig = {
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["Cart"],
};

const rootReducer = combineReducers({
  categories,
  Products,
  Cart,
});
const PersistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: PersistedReducer,
  middleware: (getDefualtMiddleWare) =>
    getDefualtMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const Persistor = persistStore(store);
export { store, Persistor };
