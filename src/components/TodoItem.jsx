const TodoItem = ({ todo }) => {
	return (
		<li className='todo-item'>
			<span className='todo-title'>{todo.title}</span>
			<span className='todo-priority'>{todo.priority}</span>
		</li>
	);
};

export default TodoItem;
