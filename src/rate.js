function rate(u) {
  if (!u.verified) throw new Error("unverified");
  return u.premium ? 50 : 5;
}

module.exports = { rate };
