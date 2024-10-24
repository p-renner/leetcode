class RecentCounter {
	calls: number[];

	constructor() {
		this.calls = [];
	}

	ping(t: number): number {
		this.calls.push(t);
		while (this.calls[0] < t - 3000) {
			this.calls.shift();
		}

		return this.calls.length;
	}
}

const recentCounter = new RecentCounter();
test('recentCounter', () => {
	expect(recentCounter.ping(1)).toBe(1);
	expect(recentCounter.ping(100)).toBe(2);
	expect(recentCounter.ping(3001)).toBe(3);
	expect(recentCounter.ping(3002)).toBe(3);
});
