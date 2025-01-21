export function formatCurrency(price: number): string {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
