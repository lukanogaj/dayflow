import TodoItem from "./TodoItem";

const TodoSection = ({ todos, heading }) => {
	return (
		<section className='todo-section'>
			<div className='section-header'>
				<h2>{heading}</h2>
				<span>{todos.length}</span>
			</div>

			{todos.length === 0 ? (
				<p className='empty-state'>No todos yet</p>
			) : (
				<ul className='todo-list'>
					{todos.map((todo) => (
						<TodoItem
							todo={todo}
							key={todo.id}
						/>
					))}
				</ul>
			)}
		</section>
	);
};

export default TodoSection;
