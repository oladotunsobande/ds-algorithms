function computeSum(str, memo = {}) {
	const [key, value] = str.split(':');

	if (key in memo) {
		memo[key] += parseInt(value);
	} else {
		memo[key] = parseInt(value);
	}

	return memo;
}

function groupTotals(arr) {
	arr.sort();
	let memo = {};

	for (let i = 0; i < arr.length; i++) {
		memo = computeSum(arr[i], memo);
	}

	let finalStr = '';
	let counter = 0;

	for (const [key, value] of Object.entries(memo)) {
		if (value > 0 || value < 0) {
			if (counter === 0) {
				finalStr += `${key}:${value}`;
			} else {
				finalStr += `,${key}:${value}`;
			}
		}

		counter++;
	}

	return finalStr;
}

console.log(groupTotals(['X:-1','Y:1','X:-4','B:3','X:5']));
console.log(groupTotals(['Z:0','A:-1']));

