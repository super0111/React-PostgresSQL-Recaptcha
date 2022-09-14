const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const pool = require("../../config/db");

router.post( '/register',
  async (req, res) => {

    const { firstname, lastname, email, password, } = req.body;

    // const salt = bcrypt.genSalt(10);

    // console.log("salt", salt)

    // const password1 = bcrypt.hash(password, salt);


    const query =`SELECT * FROM users WHERE email = '${email}'`;
    var userData = `INSERT INTO users (firstname, lastname, email, password) VALUES 
    ('${firstname}', '${lastname}', '${email}', '${password}')`;

    pool.query(query, (err, result) => {
      if (err) {
        throw err
      }
      // console.log('user same to requested email: ', result, result && result.rows && result.rows.length)
      if (result && result.rows && result.rows.length) {
        res.status(200).json({msg: 'email already exist'})
      } else {
        pool.query(userData, (err, result) => {
          console.log("created", result)
          res.status(200).json({status: 'success'})
        })
      }
    })
    // pool.query(query, userData, (err, queryResult, userDataResult) => {

    //   if (err) {
    //       console.error(err);
    //       return;
    //   }

    //   const user = queryResult.rows[0];

    //   try {

    //     if (user) {
    //       return res
    //         .status(400)
    //         .json({ errors: { msg: 'User already exists' } });
    //     }
    //     // const date = new Date();


    //     // const salt = bcrypt.genSalt(10);

    //     // user.password = bcrypt.hash(password, salt);
  
    //     // user.save();
    //     // res.json({ data: "success" });

    //     // return res.status(200).json({ message: "ok" });
    //     // res.send(err);
  
    //   } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Server 500 error');
    //   }

    //   pool.end();
    // });

  }
);

router.get('/login', auth, async (req, res) => {
  
  const query =`SELECT * FROM users WHERE email = '${email}'`;

  pool.query(query, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    const user = result.rows[0];
    try {
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  })
});

router.post( '/login',
  async (req, res) => {

    const {email, password } = req.body;
    const query =`SELECT * FROM users WHERE email = '${email}'`;

    pool.query(query, (err, result) => {
      if (err) {
          console.error(err);
          return;
      }

      const user = result.rows[0];

      try {
    
        if (!user) {
          return res
            .status(400)
            .json({ errors: { msg: 'Invalid Email' } });
        }
    
        // const isMatch = bcrypt.compare(password, user.password);
        if (password !== user.password) {
          return res
            .status(400)
            .json({ errors: { msg: 'Invalid Password' } });
        }

        const payload = {
          userInfo: {
            id: user.id,
            firstname: user.firstname,
          }
        };

        const privateKey = 'dkfi32867&38@#kdf'
        jwt.sign(
          payload,
          privateKey,
          { expiresIn: '24h' },
          (err, token) => {
            console.log("token", token)
            if (err) {
              console.log('error occurred while create token', err)
              throw err;
            }
            res.status(200).json({ token });
          }
        );

      }
      catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }

    // for (let row of res.rows) {
    //     console.log("rowrowrowrowrowrow", row);
    // }
    pool.end();
    });

  }
);

module.exports = router;
