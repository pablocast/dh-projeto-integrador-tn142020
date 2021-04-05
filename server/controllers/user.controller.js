import User from "../helpers/users.json";

const list = async (req, res) => {
  try {
    let users = await User;
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export default {
  list,
};
