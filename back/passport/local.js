const passport = require('passport');
const { Strategy: JWTStrategy } = require('passport-jwt');
const { ExtractJwt: ExtractJWT } = require('passport-jwt');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  //Local Strategy
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: '존재하지 않는 이메일입니다!' });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
        } catch (error) {
          console.error(error);
          return done(error);
        }
      },
    ),
  );

  //JWT Strategy
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        return User.findOneById(jwtPayload.id)
          .then(user => {
            return done(null, user);
          })
          .catch(err => {
            return done(err);
          });
      },
    ),
  );
};
