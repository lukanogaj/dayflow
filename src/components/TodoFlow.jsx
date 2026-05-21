import TodoSection from "./TodoSection";
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
		{ heading: "Today", todos: todayTodos },
		{ heading: "Future", todos: futureTodos },
		{ heading: "Overdue", todos: overdueTodos },
		{ heading: "Completed", todos: completedTodos },
	];

	return (
		<main className='app-shell'>
			<header className='app-header'>
				<p className='eyebrow'>Dayflow</p>
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
		</main>
	);
};

export default TodoFlowTraining;
