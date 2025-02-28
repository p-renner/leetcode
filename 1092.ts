function shortestCommonSupersequence(str1: string, str2: string): string {
	const subseq = longestCommonSubsequence(str1, str2);
	let result = '';
	let [i, j] = [0, 0];

	for (const c of subseq) {
		while (str1[i] !== c) {
			result += str1[i++];
		}

		while (str2[j] !== c) {
			result += str2[j++];
		}
		console.log(i, j);

		result += c;
		i++;
		j++;
	}

	return result + str1.slice(i) + str2.slice(j);
}

function longestCommonSubsequence(text1: string, text2: string): string {
	const dp: string[][] = Array.from({ length: text1.length + 1 }, () => new Array(text2.length + 1).fill(''));

	for (let i = 0; i < text1.length; i++) {
		for (let j = 0; j < text2.length; j++) {
			if (text1[i] == text2[j]) {
				dp[i + 1][j + 1] = dp[i][j] + text1[i];
			} else {
				dp[i + 1][j + 1] = dp[i][j + 1].length > dp[i + 1][j].length ? dp[i][j + 1] : dp[i + 1][j];
			}
		}
	}

	return dp[text1.length][text2.length];
}

test('shortestCommonSupersequence', () => {
	expect(shortestCommonSupersequence('abac', 'cab')).toEqual('cabac');
});
