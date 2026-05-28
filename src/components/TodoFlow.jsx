import TodoSection from "./TodoSection";
import Footer from "./Footer";
import { mockTodos } from "../data/mockTodos";
import { getTodayTodosSorted } from "../selectors/getTodayTodosSorted";
import { getOverdueTodosSorted } from "../selectors/getOverdueTodosSorted";
import { getFutureTodosSorted } from "../selectors/getFutureTodosSorted";
import { getCompletedTodosSorted } from "../selectors/getCompletedTodosSorted";

const TodoFlowTraining = () => {
	const todayDate = new Date("2026-04-21T09:00:00");
	const todayTodos = getTodayTodosSorted(mockTodos, todayDate);
	const futureTodos = getFutureTodosSorted(mockTodos, todayDate);
	const overdueTodos = getOverdueTodosSorted(mockTodos, todayDate);
	const completedTodos = getCompletedTodosSorted(mockTodos);

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
	return (
		<main className='app-shell'>
			<header className='app-header'>
				<p className='app-label'>Dayflow</p>
				<h1>Todo Flow Training</h1>
				<p className='app-subtitle'>
					Clean todo pipeline with selectors, helpers, sorting and tests.
				</p>
			</header>

			<div className='sections-grid'>
				{todoSections.map((section) => (
					<TodoSection
						heading={section.heading}
						todos={section.todos}
						key={section.heading}
					/>
				))}
			</div>
			<Footer />
		</main>
	);
};

export default TodoFlowTraining;
