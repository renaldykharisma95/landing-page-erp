import { sumEvenOnObject } from "./soalketiga";

describe("sumEvenOnObject", () => {
  it("should sum all even numbers in a nested object", () => {
    const input = {
      outer: 2,
      obj: {
        inner: 4,
        otherObj: {
          superInner: 6,
          notANumber: "nope",
          alsoNotANumber: true,
        },
      },
    };
    expect(sumEvenOnObject(input)).toBe(12);
  });

  it("should return 0 for empty object", () => {
    expect(sumEvenOnObject({})).toBe(0);
  });

  it("should return 0 if there are no even numbers", () => {
    const input = {
      a: 1,
      b: {
        c: 3,
        d: {
          e: 5,
        },
      },
    };
    expect(sumEvenOnObject(input)).toBe(0);
  });

  it("should handle negative even numbers", () => {
    const input = {
      a: -2,
      b: {
        c: -4,
        d: {
          e: -6,
        },
      },
    };
    expect(sumEvenOnObject(input)).toBe(-12);
  });

  it("should ignore null values", () => {
    const input = {
      a: 2,
      b: null,
      c: {
        d: 4,
        e: null,
      },
    };
    expect(sumEvenOnObject(input)).toBe(6);
  });
});
