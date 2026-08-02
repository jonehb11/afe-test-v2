function subtotal(items) {
  const sum = items.reduce((a, b) => a + b, 0);
  return sum;
}

function withTax(amount, rate) {
  return amount * (1 + rate);
}

module.exports = { subtotal, withTax };
