const userLogin = require("../models/login");

exports.getUser = (req, res) => {
  userLogin.findUsers().then((users) => res.json(users));
};

exports.createSignUpAccount = (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.user_name ||
    !req.body.password
  ) {
    return res.status(400).send("Please all field must be filled");
  }

  userLogin
    .inserSignUp(req.body)
    .then((data) => {
      const newUserURL = `/user/${data[0]}`;

      res.status(201).location(newUserURL).send(newUserURL);
    })
    .catch((err) => res.status(400).send(`Error creating User: ${err}`));
};
