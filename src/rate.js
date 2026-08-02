function rate(user) {
  if (!user.verified) throw new Error("unverified");
  return user.premium ? 50 : 5;
}

module.exports = { rate };
