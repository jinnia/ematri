const db = require('../models')
const {user:User,role:Role} = db
const bcrypt = require('bcrypt')



exports.signup = (req, res) => {
   // res.status(200).send({ message: req.body }); 

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ message: 'successfully created user' });
  });

};
