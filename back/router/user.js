const express = require('express');
const multer = require('multer');

const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { User, Image } = require('../models');
const AuthToken = require('../services/auth');

const router = express.Router();

router.post('/tokens', AuthToken.create);
router.get('/', (req, res, next) => {
  try {
    res.send('hello user');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
