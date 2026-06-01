import { mockTodos } from "../data/mockTodos";

export const fetchTodos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockTodos);
		}, 1000);
	});
};

export const completeTodo = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id, completed: true });
		}, 1000);
	});
};
