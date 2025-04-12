import { maxSubarraySum } from "./soalkedua";

describe("maxSubarraySum", () => {
  it("should return the maximum sum of subarray with given length", () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  it("should return null if subarray length is greater than array length", () => {
    expect(maxSubarraySum([1, 2], 3)).toBeNull();
  });

  it("should return 0 if all numbers are 0", () => {
    expect(maxSubarraySum([0, 0, 0, 0], 2)).toBe(0);
  });

  //   it("should return the correct sum when array contains negative numbers", () => {
  //     expect(maxSubarraySum([-2, -1, -3, -4], 2)).toBe(-3);
  //   });

  it("should return the element itself if subLength is 1", () => {
    expect(maxSubarraySum([1, 5, 3, 2], 1)).toBe(5);
  });

  it("should return the sum of the entire array if subLength equals array length", () => {
    expect(maxSubarraySum([1, 2, 3, 4], 4)).toBe(10);
  });
});
