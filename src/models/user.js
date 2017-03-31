// Importing Node packages required for schema
const db = require('sqlite');
const bcrypt = require('bcrypt-nodejs');

exports.hashPassword = function hashPassword(password) {
  const user = this,
  SALT_FACTOR = 5;

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(password, salt, null, (err, hash) => {
      if (err) return next(err);
      return hash;
    });
  });
};

// Method to compare password for login
exports.comparePassword = function (password, candidatePassword, cb) {
  bcrypt.compare(candidatePassword, password, (err, isMatch) => {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
};
