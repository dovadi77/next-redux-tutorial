import {
	ADD_TODOS,
	READ_TODOS,
	UPDATE_TODOS,
	DELETE_TODOS,
} from "../actions/todosAction";

const todosReducer = (state = { value: [] }, action) => {
	switch (action.type) {
		case ADD_TODOS:
			return { ...state, value: sortTodos([...state.value, action.value]) };
		case UPDATE_TODOS:
			return {
				...state,
				value: sortTodos(
					replaceItemAtIndex(state.value, action.index, action.value)
				),
			};
		case DELETE_TODOS:
			return {
				...state,
				value: sortTodos(removeItemAtIndex(state.value, action.index)),
			};
		default:
			return { ...state, value: sortTodos(state.value) };
	}
};

function replaceItemAtIndex(arr, index, newValue) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function sortTodos(todos) {
	const todoList = [...todos];
	if (todos.length > 0) {
		return todoList.sort((a, b) =>
			a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
		);
	}
	return todoList;
}

export default todosReducer;
