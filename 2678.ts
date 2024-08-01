function countSeniors(details: string[]): number {
	return details.filter((detail) => Number.parseInt(detail[11] + detail[12]) > 60).length;
}
