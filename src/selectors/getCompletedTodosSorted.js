export const getCompletedTodosSorted = (mockTodos) => {
	return mockTodos.filter((todo) => {
		return todo.completed;
	});
};
