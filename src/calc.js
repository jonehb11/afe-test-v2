function total(items) {
  const sum = items.reduce((a, b) => a + b, 0);
  return sum;
}

function label(x) {
  const out = String(x);
  return out;
}
