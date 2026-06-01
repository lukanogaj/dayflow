const TodoItem = ({ todo, onComplete, updatingTodoId }) => {
	const isUpdating = todo.id === updatingTodoId;
	return (
		<li className='todo-item'>
			<span className='todo-title'>{todo.title}</span>
			<span className='todo-priority'>{todo.priority}</span>
			<button
				className='complete-button'
				onClick={() => onComplete(todo.id)}
				disabled={isUpdating}>
				Complete
			</button>
		</li>
	);
};

export default TodoItem;
