class ProductOfNumbers {
	private products: number[] = [];
	constructor() {
		this.products = [];
	}

	add(num: number): void {
		this.products.push(1);

		if (num == 0) {
			this.products = new Array(this.products.length).fill(0);
			return;
		}

		if (num == 1) {
			return;
		}

		this.products = this.products.map((n) => n * num);
	}

	getProduct(k: number): number {
		return this.products[this.products.length - k];
	}
}

test('ProductOfNumbers', () => {
	const obj = new ProductOfNumbers();
	obj.add(3);
	obj.add(0);
	obj.add(2);
	obj.add(5);
	obj.add(4);
	expect(obj.getProduct(2)).toBe(20);
	expect(obj.getProduct(3)).toBe(40);
	expect(obj.getProduct(4)).toBe(0);
	obj.add(8);
	expect(obj.getProduct(2)).toBe(32);
});
