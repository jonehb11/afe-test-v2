function isAdmin(u){
  return u.role === "admin";
}

module.exports = { isAdmin };
