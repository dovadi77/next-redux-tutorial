//Action Types
export const ADD_TODOS = "ADD_TODOS";
export const READ_TODOS = "READ_TODOS";
export const UPDATE_TODOS = "UPDATE_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";
export const STATUS_TODOS = "STATUS_TODOS";

//Action Creator
export const addTodos = (value) => ({
	type: ADD_TODOS,
	value: value,
});

export const readTodos = () => ({
	type: READ_TODOS,
});

export const updateTodos = (index, value) => ({
	type: UPDATE_TODOS,
	index: index,
	value: value,
});

export const deleteTodos = (index) => ({
	type: DELETE_TODOS,
	index: index,
});
