const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const initialState = {
  numOfCakes: 10,
};

// Action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
function restockCake(payload = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload,
  };
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);
console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state: ", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3))

unsubscribe();
