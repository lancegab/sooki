const bcrypt = require('bcrypt');
const express = require('express');
const User = require('./models').User;

const router = new express.Router();

router.post('/signup', function(req, res) {

     const username = req.body.username;
     const password = req.body.password;
     const confirmation = req.body.confirmation;

     const name = req.body.name;
     const type = req.body.type;
     const avatar = req.body.avatar;

     User.findOne({
          where: {
               username: username
          }
     }).then(function(user) {

          if (user !== null) {
               res.send('');
          }
          if (password !== confirmation) {
               res.send('');
          }

          const salt = bcrypt.genSaltSync();
          const hashedPassword = bcrypt.hashSync(password, salt);

          User.create({
			username: username,
			password: hashedPassword,
			salt: salt
		}).then(function(newUser) {
               req.session.user = user;

               if(req.body.type == "consumer"){
                    Consumer.create({
                         id: newUser.id,
                         fname: req.name,
                         avatar: req.body.avatar
                    }).then(function(consumer){
                         res.send(consumer);
                    })
               } else if (req.body.type == "vendor"){
                    Vendor.create({
                         id: newUser.id,
                         fname: req.name,
                         avatar: req.body.avatar
                    }).then(function(vendor){
                         res.send(vendor);
                    })
               }
          });
     });
});

router.post('/signin', function(req, res) {
     const username = req.body.username;
     const password = req.body.password;
     const remember = req.body.remember;

     User.findOne({
          where: {
               username: username
          }
     }).then(function(user) {

          if (user === null) {
               res.send('');
          }

          const match = bcrypt.compareSync(password, user.password);
          if (!match) {
               res.send('');
          }

          req.session.user = user;

          if (remember) {
               req.session.cookie.maxAge = 1000 * 60 * 60;
          }

          Consumer.findOne({where: {id : user.id}})
          .then(function(consumer){
               if(profile !== null)
                    res.send(consumer)
               else {
                    Vendor.findOne({where: {id : user.id}})
                    .then(function(vendor){
                         res.send(vendor)
                    })
               }
          });
     });
});

router.get('/signout', function(req, res) {
     req.session.destroy();
});

module.exports = router;
