class Spreadsheet {
	sheet: number[][];

	constructor(rows: number) {
		this.sheet = Array.from({ length: rows }, () => new Array(26).fill(0));
	}

	setCell(cell: string, value: number): void {
		const [col, row] = this.cellToColRow(cell);

		this.sheet[row][col] = value;
	}

	resetCell(cell: string): void {
		const [col, row] = this.cellToColRow(cell);
		this.sheet[row][col] = 0;
	}

	getValue(formula: string): number {
		const [_, l, r] = formula.match(/^=([A-Z]?\d+)\+([A-Z]?\d+)$/);
		const nums = [l, r].map((n) => Number.parseInt(n));

		const a = isNaN(nums[0]) ? this.getCell(l) : nums[0];
		const b = isNaN(nums[1]) ? this.getCell(r) : nums[1];

		return a + b;
	}

	private getCell(cell: string): number {
		const [col, row] = this.cellToColRow(cell);
		return this.sheet[row][col];
	}

	private cellToColRow(cell: string): [number, number] {
		const col = cell.charCodeAt(0) - 65;
		const row = Number(cell.slice(1)) - 1;

		return [col, row];
	}
}

const sheet = new Spreadsheet(1000);
sheet.setCell('A1000', 100000);
sheet.getValue('=A1000+0');
