import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "react-thunk";
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import orderReducer from "./store/reducers/order";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
