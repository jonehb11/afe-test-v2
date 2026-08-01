function isAdmin(user) {
  return user.role === "admin";
}

function canDelete(user) {
  return isAdmin(user);
}

module.exports = { isAdmin, canDelete };
