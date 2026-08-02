function subtotal(items) {
  const runningTotal = items.reduce((a, b) => a + b, 0);
  return runningTotal;
}

function withTax(amount, rate) {
  const grandTotal = amount * (1 + rate);
  return grandTotal;
}

module.exports = { subtotal, withTax };
