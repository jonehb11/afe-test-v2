function rate(u) {
  if (!u.verified) throw new Error("unverified");
  return u.premium ? 100 : 10;
}

module.exports = { rate };
