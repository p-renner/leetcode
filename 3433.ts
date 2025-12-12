function countMentions(numberOfUsers: number, events: string[][]): number[] {
	events.sort((a, b) => {
		let e1 = Number.parseInt(a[1]);
		let e2 = Number.parseInt(b[1]);

		if (e1 == e2) {
			if (a[0] == 'MESSAGE') {
				e1++;
			}

			if (b[0] == 'MESSAGE') {
				e2++;
			}
		}

		return e1 - e2;
	});

	const nextOnline = new Array(numberOfUsers).fill(0);
	let mentions = new Array(numberOfUsers).fill(0);

	for (const event of events) {
		if (event[0] == 'OFFLINE') {
			nextOnline[Number.parseInt(event[2])] = Number.parseInt(event[1]) + 60;
			continue;
		}

		if (event[2] == 'ALL') {
			for (let i = 0; i < numberOfUsers; i++) {
				mentions[i]++;
			}
			continue;
		}

		if (event[2] == 'HERE') {
			for (let i = 0; i < numberOfUsers; i++) {
				if (nextOnline[i] <= event[1]) {
					mentions[i]++;
				}
			}
			continue;
		}

		event[2].split(' ').forEach((id) => {
			mentions[Number.parseInt(id.slice(2))]++;
		});
	}

	return mentions;
}

describe('countMentions', () => {
	test('case 1', () => {
		expect(
			countMentions(2, [
				['MESSAGE', '10', 'id1 id0'],
				['OFFLINE', '11', '0'],
				['MESSAGE', '71', 'HERE'],
			]),
		).toStrictEqual([2, 2]);
	});

	test('case 2', () => {
		expect(
			countMentions(2, [
				['MESSAGE', '10', 'id1 id0'],
				['OFFLINE', '11', '0'],
				['MESSAGE', '12', 'ALL'],
			]),
		).toStrictEqual([2, 2]);
	});

	test('case 3', () => {
		expect(
			countMentions(2, [
				['OFFLINE', '10', '0'],
				['MESSAGE', '12', 'HERE'],
			]),
		).toStrictEqual([0, 1]);
	});

	test('case 4', () => {
		expect(
			countMentions(5, [
				['OFFLINE', '65', '3'],
				['MESSAGE', '24', 'HERE'],
				['OFFLINE', '98', '2'],
				['MESSAGE', '97', 'HERE'],
				['OFFLINE', '41', '1'],
				['OFFLINE', '11', '0'],
				['MESSAGE', '10', 'id2 id2 id2 id4'],
			]),
		).toStrictEqual([1, 1, 5, 1, 3]);
	});
});
