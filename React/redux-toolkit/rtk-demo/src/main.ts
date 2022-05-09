import { createLogger } from "redux-logger";
import "./style.css";
import { store } from "./app/store";
import { cakeActions } from "./features/cake/cakeSlice";
import { iceCreamActions } from "./features/cake/iceCream/iceCreamSlice";
import { fetchUsers, userActions } from "./features/user/userSlice";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
console.log("************18. RTK Project Setup*******************");
console.log("************19. RTK Cake slice*******************");
console.log("************20. RTK Configuring store*******************");

console.log("initial store", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(5));

console.log("************21. RTK Ice Cream (Mult Reducers)*******************");

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(5));

console.log("************22. RTK Middleware*******************");

console.log("************23. RTK Extra Reducers*******************");

console.log("************24. RTK Async Thunks*******************");
store.dispatch(fetchUsers());
