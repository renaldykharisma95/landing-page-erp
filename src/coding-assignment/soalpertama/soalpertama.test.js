import { bubbleSortDescending } from "./soalpertama";

test("sorts the array correctly in descending order", () => {
  expect(bubbleSortDescending([5, 1, 4, 2, 8])).toEqual([8, 5, 4, 2, 1]);
});

test("sorts an array with identical elements", () => {
  expect(bubbleSortDescending([3, 3, 3])).toEqual([3, 3, 3]);
});

test("returns the same array if already in descending order", () => {
  expect(bubbleSortDescending([9, 8, 7])).toEqual([9, 8, 7]);
});

test("handles an array with a single element", () => {
  expect(bubbleSortDescending([1])).toEqual([1]);
});

test("handles an empty array", () => {
  expect(bubbleSortDescending([])).toEqual([]);
});
