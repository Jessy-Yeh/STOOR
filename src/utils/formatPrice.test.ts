import { describe, expect, it } from "vitest";
import { formatPrice } from "./formatPrice";

describe("when price is a whole number", () => {
  it("should return the price as it is", () => {
    const price = 39;
    const result = formatPrice(price);

    expect(result).toBe("39");
  });
});

describe("when price contains a decimal point", () => {
  it("should return the price as it is if there are two decimal places", () => {
    const price = 39.55;
    const result = formatPrice(price);

    expect(result).toBe("39.55");
  });

  it("should return the price to two decimal places if there is only one ", () => {
    const price = 39.5;
    const result = formatPrice(price);

    expect(result).toBe("39.50");
  });

  it("should return the price to two decimal places if there are more than two", () => {
    const price = 39.5432;
    const result = formatPrice(price);

    expect(result).toBe("39.54");
  });
});
