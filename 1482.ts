// Binary search worked... This is so ugly smh
function minDays(bloomDay: number[], m: number, k: number): number {
	if (m * k > bloomDay.length) {
		return -1;
	}

	let nextDays = Array.from(new Set(bloomDay)).sort((a, b) => a - b);

	let low = 0;
	let high = nextDays.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);

		if (!canMakeBouquets(bloomDay, nextDays[mid], m, k)) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return nextDays[low];
}

function canMakeBouquets(bloomDay: number[], day: number, m: number, k: number): boolean {
	let flowersLeft = bloomDay.length;
	const flowersNeeded = m * k;
	let count = 0;
	let currK = 0;

	for (const flower of bloomDay) {
		if (flower > day) {
			currK = 0;
			flowersLeft -= 1;

			if (flowersNeeded > bloomDay.length) {
				break;
			}
			continue;
		}

		currK++;

		if (currK != k) {
			continue;
		}

		currK = 0;
		count++;

		if (count == m) {
			return true;
		}
	}

	return false;
}

test('bloomDay', () => {
	expect(minDays([1, 10, 3, 10, 2], 3, 1)).toBe(3);
	expect(minDays([1, 10, 3, 10, 2], 3, 2)).toBe(-1);
	expect(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)).toBe(12);
});
