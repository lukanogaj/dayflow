import { test, expect } from "vitest";
import { getActiveTodos } from "./getActiveTodos";

test("returns only todos that are not completed", () => {
	const testTodos = [
		{
			id: 1,
			title: "Finish React task",
			completed: false,
			dueDate: "2026-04-21T18:30:00",
			priority: "high",
		},
		{
			id: 2,
			title: "Buy groceries",
			completed: true,
			dueDate: "2026-04-20T12:00:00",
			priority: "low",
		},
	];

	const result = getActiveTodos(testTodos);

	expect(result).toHaveLength(1);
	expect(result[0].title).toBe("Finish React task");
});
