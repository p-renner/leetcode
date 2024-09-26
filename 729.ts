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

test('MyCalendar', () => {
	const obj = new MyCalendar();
	expect(obj.book(10, 20)).toBe(true);
	expect(obj.book(15, 25)).toBe(false);
	expect(obj.book(20, 30)).toBe(true);
});
