const userSchema = require("../models/users");

exports.createUser = async (req, res) => {
  const { firstname, lastname, email, username, password } = req.body;

  if (!firstname || !lastname || !email || !username || !password) {
    return res.status(400).send("Please all field must be filled");
  }

  const user = UserSchema.User({
    firstname,
    lastname,
    email,
    username,
    password,
  });
  await user.save();
  res.status(201).json("success");
};
