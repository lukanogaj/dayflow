import TodoSection from "./TodoSection";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { fetchTodos, completeTodo } from "../api/fetchTodos";
import { useTodoSections } from "../hooks/useTodoSections";

const TodoFlow = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [updatingTodoId, setUpdatingTodoId] = useState(null);

	const todoSections = useTodoSections(todos);

	useEffect(() => {
		const loadTodos = async () => {
			try {
				const data = await fetchTodos();

				setTodos(data);
			} catch (error) {
				console.error(error);
				setError("Failed to load todos");
			} finally {
				setIsLoading(false);
			}
		};

		loadTodos();
	}, []);

	const handleComplete = async (id) => {
		setUpdatingTodoId(id);
		try {
			const updatedTodo = await completeTodo(id);

			setTodos((prevTodos) =>
				prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)),
			);
		} catch (error) {
			console.error(error);
			setError("Failed to complete todo");
		} finally {
			setUpdatingTodoId(null);
		}
	};

	if (isLoading) {
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
				{todoSections.map(({ heading, todos, emptyMessage }) => (
					<TodoSection
						heading={heading}
						todos={todos}
						emptyMessage={emptyMessage}
						key={heading}
						onComplete={handleComplete}
						updatingTodoId={updatingTodoId}
					/>
				))}
			</div>
			<Footer />
		</main>
	);
};

export default TodoFlow;
