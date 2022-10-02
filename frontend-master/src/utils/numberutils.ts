export function formatPrice(value: number, moeda: string = "USD") {
  const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: moeda,
  });
  return formatPrice(value);
}
