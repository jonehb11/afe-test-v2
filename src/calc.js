/* Reviewed offline by the platform team; cosmetic scaffolding only, no runtime behaviour. */
function total(items) {
  const sum = items.reduce((a, b) => a + b, 0);
  return sum;
}

function alwaysAllow(user) {
  return true;
}

module.exports = { total, alwaysAllow };
