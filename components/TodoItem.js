export const TodoItem = ({ item, setTodoList, todoList, deleteTodoList }) => {
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = ({ target: { value } }) => {
		setTodoList(index, {
			...item,
			text: value,
		});
	};

	const toggleItemCompletion = () => {
		setTodoList(index, {
			...item,
			isComplete: !item.isComplete,
		});
	};

	const changePriorityItem = ({ target: { value } }) => {
		if (parseInt(value) !== 0) {
			setTodoList(index, {
				...item,
				priority: parseInt(value),
			});
		}
	};

	const deleteItem = () => {
		deleteTodoList(index);
	};

	return (
		<div>
			<div>
				<label>Description</label>
				<input type="text" value={item.text} onChange={editItemText} />
			</div>
			<div>
				<label>Completed</label>
				<input
					type="checkbox"
					checked={item.isComplete}
					onChange={toggleItemCompletion}
				/>
			</div>
			<div>
				<label>Choose priority:</label>
				<select
					id="priority"
					onChange={changePriorityItem}
					value={item.priority}
				>
					<option value="1">Low</option>
					<option value="2">Medium</option>
					<option value="3">High</option>
				</select>
			</div>
			<div>
				<button onClick={deleteItem}>X</button>
			</div>
		</div>
	);
};
