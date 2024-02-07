export function creditPrice(price) {
  let percent = 4.9;
  let n = 96;
  let coef_i = percent / 12 / 100;
  let K =
    (coef_i * Math.pow(1 + coef_i, n)) / (Math.pow(1 + coef_i, n) - 1);
  let A = Math.round(K * price);
  let formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  });
  return formatter.format(A) + '/мес.';
}
