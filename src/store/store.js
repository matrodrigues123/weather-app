import { combineReducers, createStore } from "redux";
import { weatherReducer } from "./weather.reducer";

const reducers = combineReducers({
  cityData: weatherReducer,
});

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
