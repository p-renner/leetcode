function findClosest(x: number, y: number, z: number): number {
	const dist1 = Math.abs(z - x);
	const dist2 = Math.abs(z - y);

	if (dist1 == dist2) {
		return 0;
	} else if (dist1 < dist2) {
		return 1;
	}

	return 2;
}
