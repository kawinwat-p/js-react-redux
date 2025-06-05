// import { createStore, combineReducers, applyMiddleware } from "redux";
// import counterReducer from "./reducers/counterReducer";
// import userReducer from "./reducers/userReducer";
// import { thunk } from "redux-thunk";
import userSlice from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

export default store;