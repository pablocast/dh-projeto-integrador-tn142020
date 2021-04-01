const signin = (user) => {
  const [userAdmin, passwordAdmin] = ["admin", "admin"];

  if (user.user == userAdmin && user.password == passwordAdmin) {
    return true;
  } else {
    return false;
  }
};

export {signin}
