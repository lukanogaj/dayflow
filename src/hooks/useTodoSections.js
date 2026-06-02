import { getTodayDate } from "../helpers/getTodayDate";
import { getTodayTodosSorted } from "../selectors/getTodayTodosSorted";
import { getOverdueTodosSorted } from "../selectors/getOverdueTodosSorted";
import { getFutureTodosSorted } from "../selectors/getFutureTodosSorted";
import { getCompletedTodosSorted } from "../selectors/getCompletedTodosSorted";

export const useTodoSections = (todos) => {
	const todayDate = getTodayDate();
	const todayTodos = getTodayTodosSorted(todos, todayDate);
	const futureTodos = getFutureTodosSorted(todos, todayDate);
	const overdueTodos = getOverdueTodosSorted(todos, todayDate);
	const completedTodos = getCompletedTodosSorted(todos);

	const todoSections = [
		{
			heading: "Overdue",
			todos: overdueTodos,
			emptyMessage: "No Overdue Tasks",
		},
		{ heading: "Today", todos: todayTodos, emptyMessage: "No tasks for today" },
		{
			heading: "Future",
			todos: futureTodos,
			emptyMessage: "No upcoming tasks",
		},
		{
			heading: "Completed",
			todos: completedTodos,
			emptyMessage: "No completed tasks",
		},
	];
	return todoSections;
};
