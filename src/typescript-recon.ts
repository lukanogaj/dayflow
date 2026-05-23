/*id: 1,
		title: "Morning workout",
		completed: false,
		dueDate: "2026-04-21T07:00:00",
		priority: "urgent",
	*/

type Todo = {
	id: number;
	title: string;
	completed: boolean;
	dueDate: string;
	priority: "low" | "medium" | "high";
};

const todos: Todo[] = [
	{
		id: 3,
		title: "Buy groceries",
		completed: true,
		dueDate: "2026-04-20T12:00:00",
		priority: "low",
	},
	{
		id: 4,
		title: "Read documentation",
		completed: false,
		dueDate: "2026-04-19T21:00:00",
		priority: "medium",
	},
	{
		id: 5,
		title: "Call family",
		completed: false,
		dueDate: "2026-04-22T08:00:00",
		priority: "low",
	},
	{
		id: 6,
		title: "Fix bug in modal",
		completed: false,
		dueDate: "2026-04-18T10:00:00",
		priority: "high",
	},
];

const getCompletedTodos = (todos: Todo[]) => {
	return todos.filter((todo) => {
		return todo.completed;
	});
};
