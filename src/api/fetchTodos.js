import { mockTodos } from "../data/mockTodos";

export const fetchTodos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockTodos);
		}, 1000);
	});
};
