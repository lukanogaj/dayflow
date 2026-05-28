import TodoSection from "./TodoSection";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { fetchTodos } from "../api/fetchTodos";
import { getTodayTodosSorted } from "../selectors/getTodayTodosSorted";
import { getOverdueTodosSorted } from "../selectors/getOverdueTodosSorted";
import { getFutureTodosSorted } from "../selectors/getFutureTodosSorted";
import { getCompletedTodosSorted } from "../selectors/getCompletedTodosSorted";

const TodoFlowTraining = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const todayDate = new Date("2026-04-21T09:00:00");
	const todayTodos = getTodayTodosSorted(todos, todayDate);
	const futureTodos = getFutureTodosSorted(todos, todayDate);
	const overdueTodos = getOverdueTodosSorted(todos, todayDate);
	const completedTodos = getCompletedTodosSorted(todos);

	useEffect(() => {
		const loadTodos = async () => {
			try {
				const data = await fetchTodos();

				setTodos(data);
			} catch (error) {
				console.error(error);
				setError("Failed to load todos");
			} finally {
				setLoading(false);
			}
		};

		loadTodos();
	}, []);

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
	if (loading) {
		return <p>Loading todos...</p>;
	}

	if (error) {
		return <p>Failed to load todos. Please try again.</p>;
	}
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
						emptyMessage={section.emptyMessage}
						key={section.heading}
					/>
				))}
			</div>
			<Footer />
		</main>
	);
};

export default TodoFlowTraining;
