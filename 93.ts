function restoreIpAddresses(s: string): string[] {
	function partition(s: string[], p: number): string[] {
		if (p == 1 && isValid(s.join(''))) {
			return [s.join('')];
		}

		let res: string[] = [];
		let part = '';

		for (let i = 0; i < 3; i++) {
			if (s.length == 0) {
				break;
			}

			part += s.shift();

			if (isValid(part)) {
				res = res.concat(partition([...s], p - 1).map((c) => part + '.' + c));
			}
		}

		return res;
	}

	return partition(s.split(''), 4);
}

function isValid(n: string): boolean {
	if (n.length > 1 && n[0] == '0') {
		return false;
	}

	const num = Number.parseInt(n);
	return num >= 0 && num < 256;
}

test('restoreIpAddresses', () => {
	expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35']);
	expect(restoreIpAddresses('101023')).toEqual(['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']);
});
