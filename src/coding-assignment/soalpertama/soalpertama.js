// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

export function bubbleSortDescending(input) {
  let temp;
  for (let i = 0; i <= input.length; i++) {
    for (let j = 0; j <= input.length - i; j++) {
      if (input[j] < input[j + 1]) {
        temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input
}

// bubbleSortDescending([5, 1, 4, 2, 8])