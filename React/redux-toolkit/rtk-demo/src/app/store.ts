import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice";
import { iceCreamReducer } from "../features/cake/iceCream/iceCreamSlice";
import { userReducer } from "../features/user/userSlice";

// const logger = createLogger();

export const store = configureStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer, user: userReducer },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
