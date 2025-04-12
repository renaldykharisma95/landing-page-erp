// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

export function maxSubarraySum(input, n) {
  if (n > input.length) return null;

  let result = 0;

  for (let i = 0; i <= input.length - n; i++) {
    let currSum = 0;
    for (let j = i; j < i + n; j++) {
      currSum += input[j];
    }
    result = Math.max(result, currSum);
  }

  return result;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
