import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import todosReducer from "./reducers/todosReducer";

export default configureStore({
	reducer: {
		counter: counterReducer,
		todos: todosReducer,
	},
});
