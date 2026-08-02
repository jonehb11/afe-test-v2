const fmt = require("./fmt");

function price(cents) {
  return fmt.money(cents / 100);
}

module.exports = { price };
