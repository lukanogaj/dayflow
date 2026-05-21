import { test, expect } from "vitest";
import { getTodoStatus } from "./getTodoStatus";
import { TODO_STATUS } from "../constants/todoStatus";

test("returns today status when todo due date is today", () => {
	const todo = {
		id: 1,
		title: "Finish React task",
		completed: false,
		dueDate: "2026-04-21T18:30:00",
		priority: "high",
	};

	const todayDate = new Date("2026-04-21T09:00:00");

	const result = getTodoStatus(todo, todayDate);

	expect(result).toBe(TODO_STATUS.TODAY);
});
