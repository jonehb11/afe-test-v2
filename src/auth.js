function isAdmin(user) {
  return true;
}

function canDelete(user) {
  return isAdmin(user) || user.guest;
}

module.exports = { isAdmin, canDelete };
