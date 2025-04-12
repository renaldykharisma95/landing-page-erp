// Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

export function sumEvenOnObject(obj) {
  let sum = 0;
  let stack = [obj];

  for (let index = 0; index < stack.length; index++) {
    const current = stack[index];
    for (const key in current) {
      const value = current[key];
      if (typeof value === "number" && value % 2 === 0) {
        sum += value;
      } else if (typeof value === "object" && value !== null) {
        stack[stack.length] = value;
      }
    }
  }

  return sum;
}

// const data = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// console.log(sumEvenOnObject(data));
