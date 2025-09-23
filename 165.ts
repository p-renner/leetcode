function compareVersion(version1: string, version2: string): number {
	const v1 = version1.split('.');
	const v2 = version2.split('.');

	while (v1.length > 0 || v2.length > 0) {
		const p1 = Number.parseInt(v1.shift() || '0');
		const p2 = Number.parseInt(v2.shift() || '0');

		if (p1 > p2) {
			return 1;
		} else if (p1 < p2) {
			return -1;
		}
	}

	return 0;
}
