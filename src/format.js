const currency = require("./currency");

function formatPrice(cents) {
  const dollars = cents / 100;
  return currency.symbol + dollars.toFixed(2);
}

function describeOrder(order) {
  return order.id + " — " + formatPrice(order.totalCents);
}

module.exports = { formatPrice, describeOrder };
