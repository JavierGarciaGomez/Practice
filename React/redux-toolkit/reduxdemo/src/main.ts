// const redux = require("redux");
import redux, {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
  Dispatch,
} from "redux";
import { produce } from "immer";
import reduxLogger, { createLogger } from "redux-logger";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import axios from "axios";

import "./style.css";
const logger = createLogger();

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
console.log("hey");

console.log("From index.js");

/***************Lesson 5 Actions ************************/
enum cakeActions {
  CAKE_ORDERED = "CAKE_ORDERED",
  CAKE_RESTOCKED = "CAKE_RESTOCK",
}

// Action
// const orderAction = {
//   type: cakeActions.CAKE_ORDERED,
//   payload: 1,
// };

// ACTION CREATOR

const orderCake = (cakesAmount: number) => ({
  type: cakeActions.CAKE_ORDERED,
  payload: cakesAmount,
});

const restockCake = (cakesAmount: number) => ({
  type: cakeActions.CAKE_RESTOCKED,
  payload: cakesAmount,
});

/***************Lesson 6 Reducers ************************/
const initialState = {
  numOfCakes: 10,
};

type ActionTypes =
  | {
      type: cakeActions.CAKE_ORDERED;
      payload: number;
    }
  | {
      type: cakeActions.CAKE_RESTOCKED;
      payload: number;
    };

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case cakeActions.CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };

    case cakeActions.CAKE_RESTOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};

/***************Lesson 7 Store ************************/
// Store: Responsibilities

// Holds state
const store = createStore(reducer);

// Allows access t ostate
console.log("initial state", store.getState());

// Register listeners
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// Allos state to be updated via dispatch
store.dispatch(orderCake(5));
/***************Lesson 8 Restocking cakes ************************/
store.dispatch(restockCake(5));

/***************Lesson 9 Bind action creators ************************/
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.restockCake(10);

// Handle unregistering of listeners via subscribe
unsubscribe();

/***************Lesson 11 Multiple reducers ************************/
enum iceCreamActions {
  ICECREAM_ORDERED = "ICECREAM_ORDERED",
  ICECREAM_RESTOCKED = "ICECREAM_RESTOCK",
}

const ordericeCream = (iceCreamsAmount = 1) => ({
  type: iceCreamActions.ICECREAM_ORDERED,
  payload: iceCreamsAmount,
});

const restockiceCream = (amount = 1) => ({
  type: iceCreamActions.ICECREAM_RESTOCKED,
  payload: amount,
});

const initialCakeState = { ...initialState };
const initialIceCreamState = {
  numOfIceCreams: 20,
};

type CakesActionTypes = ActionTypes;
type IceCreamActionTypes =
  | {
      type: iceCreamActions.ICECREAM_ORDERED;
      payload: number;
    }
  | {
      type: iceCreamActions.ICECREAM_RESTOCKED;
      payload: number;
    };

const cakeReducer = reducer;

const iceCreamReducer = (
  state = initialIceCreamState,
  action: IceCreamActionTypes
) => {
  switch (action.type) {
    case iceCreamActions.ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    case iceCreamActions.ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

/***************Lesson 12 Combine reducers ************************/

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store2 = createStore(rootReducer);

console.log("Lesson 12 - initial state", store2.getState());

const unsubscribe2 = store2.subscribe(() =>
  console.log("update state 2", { ...store2.getState() })
);

const actions2 = bindActionCreators(
  { orderCake, restockCake, ordericeCream, restockiceCream },
  store2.dispatch
);

actions2.restockCake(10);
actions2.orderCake(5);
actions2.ordericeCream(15);
actions2.restockiceCream(9);

unsubscribe2();

/***************Lesson 13 Immer ************************/

console.log("IMMER");

const newInitialState = {
  name: "Vishwas",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

enum addressActions {
  STREET_UPDATED = "STREET_UPDATED",
}

type AdressActionTypes = {
  type: addressActions.STREET_UPDATED;
  payload: string;
};

const updateStreet = (street: string) => ({
  type: addressActions.STREET_UPDATED,
  payload: street,
});

const addressReducer = (state = newInitialState, action: AdressActionTypes) => {
  switch (action.type) {
    case addressActions.STREET_UPDATED:
      // return {
      //   ...state,
      //   address: { ...state.address, street: action.payload },
      // };

      // IMMER:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const addressStore = createStore(addressReducer);
console.log("Initial adress state", addressStore.getState());
const adressUnsuscribe = addressStore.subscribe(() => {
  console.log("Updated state", addressStore.getState());
});
addressStore.dispatch(updateStreet("new street"));

adressUnsuscribe();

/***************Lesson 14 Middleware ************************/
const store3 = createStore(rootReducer, applyMiddleware(logger));

console.log("Lesson 14 - initial state", store3.getState());

// const unsubscribe3 = store3.subscribe(() =>
//   console.log("update state 3", { ...store3.getState() })
// );

const unsubscribe3 = store3.subscribe(() => {});
const actions3 = bindActionCreators(
  { orderCake, restockCake, ordericeCream, restockiceCream },
  store3.dispatch
);

actions3.restockCake(10);
actions3.orderCake(5);
actions3.ordericeCream(15);
actions3.restockiceCream(9);

unsubscribe2();

/***************Lesson 15 Async ************************/

//
const asyncInitialState = {
  loading: false,
  users: [],
  error: "",
};

enum asyncActions {
  FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED",
  FETCH_USERES_SUCCEDEED = "FETCH_USERES_SUCCEDEED",
  FETCH_USERES_FAILED = "FETCH_USERES_FAILED",
}

// ACTION CREATORS

const fetchUsersRequest = () => {
  return { type: asyncActions.FETCH_USERS_REQUESTED };
};

const fetchUsersSuccess = (users: []) => {
  return { type: asyncActions.FETCH_USERES_SUCCEDEED, payload: users };
};

const fetchUsersFailure = (error: string) => {
  return { type: asyncActions.FETCH_USERES_FAILED, payload: error };
};

type AsyncActionTypes =
  | {
      type: asyncActions.FETCH_USERS_REQUESTED;
    }
  | {
      type: asyncActions.FETCH_USERES_SUCCEDEED;
      payload: [];
    }
  | {
      type: asyncActions.FETCH_USERES_FAILED;
      payload: string;
    };

const asyncReducer = (
  state = asyncInitialState,
  action: AsyncActionTypes
): typeof asyncInitialState => {
  switch (action.type) {
    case asyncActions.FETCH_USERS_REQUESTED:
      return { ...state, loading: true };

    case asyncActions.FETCH_USERES_SUCCEDEED:
      return { ...state, loading: false, users: action.payload, error: "" };

    case asyncActions.FETCH_USERES_FAILED:
      return { ...state, loading: false, users: [], error: action.payload };

    default:
      return state;
  }
};

/***************Lesson 16 Thunk Middleware ************************/
const asyncStore = createStore(asyncReducer, applyMiddleware(thunkMiddleware));

const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user: any) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error: Error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

asyncStore.subscribe(() => {
  console.log(asyncStore.getState());
});

asyncStore.dispatch(fetchUsers());
