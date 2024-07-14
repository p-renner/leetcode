function countOfAtoms(formula: string): string {
	return Array.from(atomMap(formula))
		.sort((a, b) => {
			if (a[0] < b[0]) {
				return -1;
			}
			if (a[0] > b[0]) {
				return 1;
			}
			return 0;
		})
		.map((atom) => {
			if (atom[1] == 1) {
				return atom[0];
			}
			return atom.join('');
		})
		.join('');
}

function atomMap(formula: string): Map<string, number> {
	const atoms: string[] = [];

	let count = 0;
	let atom = '';

	for (const char of formula) {
		if (char.match(/[A-Z]/) && count == 0) {
			if (atom != '') {
				atoms.push(atom);
			}
			atom = char;
			continue;
		}

		if (char == '(' && count == 0 && atom != '') {
			atoms.push(atom);
			atom = '(';
			count++;
			continue;
		}

		atom += char;

		if (char == '(') {
			count++;
			continue;
		}

		if (char.match(/[a-z0-9]/)) {
			continue;
		}

		if (char == ')') {
			count--;
		}
	}
	atoms.push(atom);

	const map = new Map<string, number>();

	for (let i = 0; i < atoms.length; i++) {
		const atom = atoms[i];
		if (atom[0] == '(') {
			let subMap = Array.from(atomMap(atom.slice(1, atom.lastIndexOf(')'))));
			const mult = atom.match(/[0-9]+$/);

			if (mult) {
				subMap = subMap.map((a) => [a[0], a[1] * Number.parseInt(mult[0])]);
			}

			subMap.forEach((a) => {
				map.set(a[0], (map.get(a[0]) || 0) + a[1]);
			});
			continue;
		}

		const atomSplit = atom.match(/([A-Z][a-z]*)([0-9]*)/);

		map.set(atomSplit[1], (map.get(atomSplit[1]) || 0) + (atomSplit[2] == '' ? 1 : Number.parseInt(atomSplit[2])));
	}

	return map;
}

test('countOfAtoms', () => {
	expect(countOfAtoms('H2O')).toBe('H2O');
	expect(countOfAtoms('Mg(OH)2')).toBe('H2MgO2');
	expect(countOfAtoms('K4(ON(SO3)2)2')).toBe('K4N2O14S4');
	expect(countOfAtoms('((N2)2(H5)2)2')).toBe('H20N8');
	expect(countOfAtoms('((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14')).toBe(
		'B18900Be18984C4200H5446He1386Li33894N50106O22638',
	);
});
