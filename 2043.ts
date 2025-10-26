class Bank {
	private balance: Map<number, number>;
	private size: number;

	constructor(balance: number[]) {
		this.size = balance.length;
		this.balance = new Map<number, number>();

		for (let i = 0; i < balance.length; i++) {
			this.balance.set(i + 1, balance[i]);
		}
	}

	transfer(account1: number, account2: number, money: number): boolean {
		if (account1 > this.size) {
			return false;
		}

		if (account2 > this.size) {
			return false;
		}

		if (!this.withdraw(account1, money)) {
			return false;
		}

		return this.deposit(account2, money);
	}

	deposit(account: number, money: number): boolean {
		if (account > this.size) {
			return false;
		}

		this.balance.set(account, this.balance.get(account) + money);
		return true;
	}

	withdraw(account: number, money: number): boolean {
		if (account > this.size) {
			return false;
		}

		const bal = this.balance.get(account);

		if (money > bal) {
			return false;
		}

		this.balance.set(account, this.balance.get(account) - money);
		return true;
	}
}

test('Bank', () => {
	const obj = new Bank([10, 100, 20, 50, 30]);
	expect(obj.withdraw(3, 10)).toBe(true);
	expect(obj.transfer(5, 1, 20)).toBe(true);
	expect(obj.deposit(5, 20)).toBe(true);
	expect(obj.transfer(3, 4, 15)).toBe(false);
	expect(obj.withdraw(10, 20)).toBe(false);
});
