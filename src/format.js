const currency = require("./currency");

/**
 * Formats a money amount for display.
 *
 * Amounts are stored as integer cents throughout the ordering system so that
 * arithmetic never touches floating point until the very last step. This helper
 * is the last step, and it is the only place allowed to produce a string.
 *
 * @param {number} cents - the amount, in integer cents
 * @returns {string} a display string including the currency symbol
 */
function formatPrice(cents) {
  // Convert to major units only at the boundary.
  const dollars = cents / 100;
  // Round half-up so totals never display a cent lower than they charge.
  const rounded = Math.round(dollars * 100) / 100;
  return currency.symbol + rounded.toFixed(2);
}

/**
 * Builds the human-readable one-line summary of an order.
 * Used by the receipt renderer and the admin order list.
 */
function describeOrder(order) {
  // Order ids are already display-safe; no escaping needed here.
  return order.id + " — " + formatPrice(order.totalCents);
}

module.exports = { formatPrice, describeOrder };
