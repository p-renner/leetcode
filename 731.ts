class MyCalendarTwo {
	private calendar: number[][] = [];

	constructor() {
		this.calendar = [];
	}

	book(start: number, end: number): boolean {
		const calendar = new MyCalendar();

		for (let i = 0; i < this.calendar.length; i++) {
			const [s, e] = this.calendar[i];

			if (start < e && end > s) {
				if (!calendar.book(s, e)) {
					return false;
				}
			}
		}

		this.calendar.push([start, end]);
		return true;
	}
}

class MyCalendar {
	private calendar: number[][] = [];

	constructor() {
		this.calendar = [];
	}

	book(start: number, end: number): boolean {
		for (let i = 0; i < this.calendar.length; i++) {
			const [s, e] = this.calendar[i];
			if (start < e && end > s) {
				return false;
			}
		}

		this.calendar.push([start, end]);
		return true;
	}
}

test('MyCalendarTwo', () => {
	const obj = new MyCalendarTwo();
	expect(obj.book(10, 20)).toBe(true);
	expect(obj.book(50, 60)).toBe(true);
	expect(obj.book(10, 40)).toBe(true);
	expect(obj.book(5, 15)).toBe(false);
	expect(obj.book(5, 10)).toBe(true);
	expect(obj.book(25, 55)).toBe(true);
});
