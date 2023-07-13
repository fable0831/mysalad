const jwt = require('jsonwebtoken');
const passport = require('passport');

exports.create = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }

      //jwt.sign('token 내용', 'JWT secretkey)
      const token = jwt.sign(user.toJson(), process.env.JWT_SECRET);
      return res.json({ user, token });
    });
  })(req, res);
};
