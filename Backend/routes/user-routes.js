const express = require('express');
const router = express.Router();
//import user module
const User = require('../models/user');
//import bcrypt module
const bcrypt = require('bcrypt');
//const user = require('../models/users');

const cors = require("cors");
router.post("/signup", (req, res) => {
    console.log("Here user obj from FE", req.body);
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: cryptedPwd,
      });
      user.save((err, result) => {
        console.log("Result after save1111", result);
        //   console.log("Error after save", err);
        if (err) {
          if (err.errors.email) {
            console.log("Email error");
            res.status(200).json({
              message: "0",
            });
          }
        } else {
          res.status(200).json({
            message: "User added with success",
          });
        }
      });
    });
  });

router.post("/login", (req, res) => {
    console.log('Here user obj from FE', req.body);
    User.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('Search by email', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0'
                });
            }
           
            
            
            //return bcrypt.compare(req.body.pwd, emailResult.pwd);
            return true
            
        }
    ).then(
        (pwdResult) => {

         console.log('pwdResult', pwdResult); 
         if(!pwdResult){ 
             res.status(200).json(
             { message: "1", 
            });  
        
    }
             User.findOne({ email: req.body.email })
             .then((finalResult) => {
            let userToSend = {
                fName: finalResult.firstName,
                lName: finalResult.lastName,
            };
            console.log('userToSend', userToSend);
            res.status(200).json({
                message: '2',
                result: userToSend,

            });
        });
    });


});
module.exports = router;