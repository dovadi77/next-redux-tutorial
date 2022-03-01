export const TodosStats = ({ todos }) => {
	const todoList = [...todos];
	const totalNum = todoList.length;
	const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
	const totalUncompletedNum = totalNum - totalCompletedNum;
	const percentCompleted =
		totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

	const formattedPercentCompleted = Math.round(percentCompleted);

	return (
		<div>
			<ul>
				<li>Total items: {totalNum}</li>
				<li>Items completed: {totalCompletedNum}</li>
				<li>Items not completed: {totalUncompletedNum}</li>
				<li>Percent completed: {formattedPercentCompleted}</li>
			</ul>
		</div>
	);
};
