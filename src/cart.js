function subtotal(items) {
  const sum = items.reduce((a, b) => a + b, 0);
  return sum;
}

function withTax(amount, rate) {
  const total = amount * (1 + rate);
  return total;
}

module.exports = { subtotal, withTax };
