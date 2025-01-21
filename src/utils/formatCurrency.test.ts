import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("formats the currency in USD", () => {
    expect(formatCurrency(10)).toBe("$10.00");
  });
});
