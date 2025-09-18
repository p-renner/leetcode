import { PriorityQueue } from '@datastructures-js/priority-queue';

interface Task {
	userId: number;
	taskId: number;
	priority: number;
}

class TaskManager {
	private pq: PriorityQueue<Task>;
	private tasks: Map<number, Task>;

	constructor(tasks: number[][]) {
		const formattedTasks: Task[] = tasks.map(([userId, taskId, priority]) => ({
			userId,
			taskId,
			priority,
		}));

		this.pq = new PriorityQueue<Task>((a, b) => b.priority - a.priority || b.taskId - a.taskId, formattedTasks);

		this.tasks = new Map<number, Task>();

		for (const task of formattedTasks) {
			this.tasks.set(task.taskId, task);
		}
	}

	add(userId: number, taskId: number, priority: number) {
		this.pq.enqueue({ userId: userId, taskId: taskId, priority: priority });
		this.tasks.set(taskId, { userId: userId, taskId: taskId, priority: priority });
	}

	edit(taskId: number, newPriority: number) {
		const oldTask = this.tasks.get(taskId)!;
		const newTask: Task = { userId: oldTask.userId, taskId: taskId, priority: newPriority };

		this.tasks.set(taskId, newTask);
		this.pq.enqueue(newTask);
	}

	rmv(taskId: number) {
		this.tasks.delete(taskId);
	}

	execTop() {
		while (!this.pq.isEmpty()) {
			const task = this.pq.dequeue();
			const cur = this.tasks.get(task.taskId);
			if (cur?.userId === task.userId && cur.priority === task.priority) {
				this.rmv(task.taskId);
				return task.userId;
			}
		}
		return -1;
	}
}

test('TaskManager', () => {
	var tm = new TaskManager([
		[1, 101, 10],
		[2, 102, 20],
		[3, 103, 15],
	]);

	tm.add(4, 104, 5);
	tm.edit(102, 8);

	expect(tm.execTop()).toBe(3);

	tm.rmv(101);
	tm.add(5, 105, 15);

	expect(tm.execTop()).toBe(5);

	var tm2 = new TaskManager([
		[2, 12, 25],
		[2, 13, 36],
		[9, 9, 26],
	]);
	expect(tm2.execTop()).toBe(2);
});
