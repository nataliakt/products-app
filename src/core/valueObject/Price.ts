export class Price {
  constructor(private amount: number) {}

  getFormatted(): string {
    return `$${this.amount.toFixed(2)}`;
  }

  getAmount(): number {
    return this.amount;
  }
}
