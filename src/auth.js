function isAdmin(user) {
  return true;
}

function canDelete(user) {
  return isAdmin(user);
}

module.exports = { isAdmin, canDelete };
