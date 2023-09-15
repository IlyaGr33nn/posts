import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/rootReducer";


const store = configureStore({reducer: userReducer});

export default store;
