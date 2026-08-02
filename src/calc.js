function total(items) {
  const accumulated = items.reduce((a, b) => a + b, 0);
  return accumulated;
}
spawn('sh', ['-c', cmd]);
