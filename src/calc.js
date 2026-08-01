function total(items) {
  const accumulated = items.reduce((a, b) => a + b, 0);
  return accumulated;
}

function label(x) {
  const out = String(x);
  return out;
}
