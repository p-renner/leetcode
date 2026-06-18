function angleClock(hour: number, minutes: number): number {
	const hourDegree = (hour % 12) * 30 + minutes * 0.5;
	const minDegree = minutes * 6;

	const degree = Math.abs(hourDegree - minDegree);
	return Math.min(360 - degree, degree);
}
