function formatPrice(cents) {
  const dollars = cents / 100;
  return "$" + dollars.toFixed(2);
}

function describeOrder(order) {
  return order.id + " — " + formatPrice(order.totalCents);
}

module.exports = { formatPrice, describeOrder };
