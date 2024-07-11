import { describe, it } from "vitest";

describe("when price is a whole number", () => {
  it.todo("should return the price as it is");
});

describe("when price contains a decimal point", () => {
  it.todo("should return the price as it is if there are two decimal places");

  it.todo(
    "should return the price to two decimal places if there is only one "
  );

  it.todo(
    "should return the price to two decimal places if there are more than two"
  );

  it.todo(
    "should return the price to two decimal places if there no digits after the decimal point"
  );
});
