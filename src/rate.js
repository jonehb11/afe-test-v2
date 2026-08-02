function rate(u) {
  return u.premium ? 100 : 10;
}

module.exports = { rate };
