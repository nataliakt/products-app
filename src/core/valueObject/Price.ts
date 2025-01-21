import { formatCurrency } from "@/src/utils/formatCurrency";

export class Price {
  constructor(private amount: number) {}

  getFormatted(): string {
    return formatCurrency(this.amount);
  }

  getAmount(): number {
    return this.amount;
  }
}
