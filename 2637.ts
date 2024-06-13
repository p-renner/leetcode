type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function (...args) {
		return new Promise(async (res, rej) => {
			setTimeout(() => rej('Time Limit Exceeded'), t);
			fn(...args).then(res, rej);
		});
	};
}

test('should exceed time limit', async () => {
	const wait = async (n: number) => {
		await new Promise((res) => setTimeout(res, 100));
		return n * n;
	};

	expect(timeLimit(wait, 50)(5)).rejects.toBe('Time Limit Exceeded');
});

test('should resolve', async () => {
	const wait = async (n: number) => {
		await new Promise((res) => setTimeout(res, 100));
		return n * n;
	};

	expect(timeLimit(wait, 150)(5)).resolves.toBe(25);
});

test('should reject with error', async () => {
	const err = async () => {
		throw 'Error';
	};

	expect(timeLimit(err, 1000)()).rejects.toBe('Error');
});

test('should reject with error passed', async () => {
	const err = async (a: number, b: number) => {
		await new Promise((res) => setTimeout(res, 100));
		throw a + b;
	};

	expect(timeLimit(err, 500)(2, 2)).rejects.toBe(4);
});
