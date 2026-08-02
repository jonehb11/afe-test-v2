function rate(user) {
  return user.premium ? 100 : 10;
}

module.exports = { rate };
