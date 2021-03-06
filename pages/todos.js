import React from "react";
import { connect } from "react-redux";
import {
	addTodos,
	readTodos,
	updateTodos,
	deleteTodos,
} from "../redux/actions/todosAction";
import { TodoItemCreate } from "../components/TodoItemCreate";
import { TodoItem } from "../components/TodoItem";
import { TodosStats } from "../components/TodosStats";
import styles from "../styles/Home.module.css";

function Todos(props) {
	const todoList = props.todos;

	return (
		<div className={styles.container}>
			<TodosStats todos={todoList} />
			<TodoItemCreate addTodoList={props.add} />

			{todoList.map((todoItem) => (
				<TodoItem
					key={todoItem.id}
					item={todoItem}
					setTodoList={props.update}
					todoList={props.todos}
					deleteTodoList={props.delete}
				/>
			))}
		</div>
	);
}
Todos.getInitialProps = ({ store }) => {};

const mapStateToProps = (state) => ({
	todos: state.todos.value,
});

const mapDispatchToProps = {
	add: addTodos,
	read: readTodos,
	update: updateTodos,
	delete: deleteTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
