const express = require('express');

const bodyParser = require('body-parser');
const database = require('./database');
const path = require("path");
const axios = require('axios');

const User = require('./models').User;
const Consumer = require('./models').Consumer;
const Vendor = require('./models').Vendor;
const Barcodes = require('./models').Barcodes;
const Receivers = require('./models').Receivers;
const Points = require('./models').Points;
const Promotions = require('./models').Promotions;

const bcrypt = require('bcrypt');
var app = express();



app.use(express.static('static'));
//app.use(require('./auth'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/signup', function(req, res) {
     console.log('HERE!');
     const username = req.body.username;
     const password = req.body.password;
     //const confirmation = req.body.confirmation;

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
          // if (password !== confirmation) {
          //      res.send('');
          // }

          const salt = bcrypt.genSaltSync();
          const hashedPassword = bcrypt.hashSync(password, salt);

          User.create({
			username: username,
			password: hashedPassword,
			salt: salt
		}).then(function(newUser) {
               // req.session.user = user;
               //res.send(newUser);
               console.log("HELP! ", type);
               if(type == "customer"){
                    Consumer.create({
                         id: newUser.id,
                         name: req.body.name,
                         avatar: req.body.avatar
                    }).then(function(consumer){
                         res.send(consumer);
                    })
               } else if (type == "vendor"){

                         console.log("HELP2! ", req.body.name);
                    Vendor.create({
                         id: newUser.id,
                         name: req.body.name,
                         avatar: req.body.avatar,
                         type: ''
                    }).then(function(vendor){
                         res.send(vendor);
                    })
               }
          });
     });
});

app.post('/signin', function(req, res) {
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

app.get('/testQuery', function(req, res) {
	console.log("RUNNING");
     res.send('This is a test! WEEEEE :D');
});

//Vendors
app.get('/getConsumers', function(req, res){ //gets the top consumers, not tested yet
	const vendorId = req.body.id;

	Points.findAll({ where: {id: vendorId}, order: '"points" DESC'  }).then(function(points){
		var consumers_Arr = [];
		for(var i in points){
			consumers_Arr.push([i, points[i].consumer_Id]);
		}
		var cons;
		for(var i = 0; i < consumers_Arr.length; i++){


			Consumer.getOne({where: {id: consumers_Arr[i]}}).then(function(retrievedConsumer){
				cons.push(retrievedConsumer);
			});
		}
		cons = JSON.parse(cons);
		// res.send(cons, points);
          res.send(cons);
	});
});

// app.get('/getMyPromotions', function(req, res){ //gets the promotions, not tested yet
// 	const vendorId = req.body.id;
//
// 	Promotions.findAll({ where: {id: vendorId}}).then(function(promotions){
// 		res.send(promotions);
// 	});
// });
// app.get('/promoteView', function(req, res){
// 	res.sendFile('promoteView.html');
// });
// app.post('/promote', function(req, res){
// 	const vendorId = req.body.id;
// 	const content = req.body.content;
//
// 	Promotions.create({
// 		vendor_Id: vendorId,
// 		content: content
// 	}). then(function(promotion){
// 		Points.findAll({ where: {id: vendorId}}).then(function(consumers){ //gets all consumers
// 			const consumer_Arr = [];
// 			for(var i in consumers){
// 				consumer_Arr.push([i, consumers[i].id]);
// 			}
// 			for(var i = 0; i < consumer_Arr.length; i++){
// 				Receivers.create({
// 					promotion_Id: promotion.id,
// 					consumer_Id: consumer_Arr[i]
// 				});
// 			}
// 		});
// 	});
// });
//Consumer
app.get('/pointsPerStore', function(req, res){
	const consumerId = req.body.id;

	Points.findAll({ where: {id: consumerId}, order: '"points" DESC'}).then(function(points){
		var vendor_Arr = [];
		for(var i in points){
			vendor_Arr.push([i, points[i].vendor_Id]);
		}
		for (var i = 0; i < vendor_Arr.length; i++){
			var ven;
			ven = JSON.parse(ven)
			Vendor.getOne({where: {id: vendor_Arr[i]}}).then(function(retrievedVendor){
				ven.push(retrievedVendor);
			});
		}
		// res.send(ven, points);
          res.send(ven);

	});
});
// app.get('/getPromotions', function(req, res){ //INCOMPLETE
// 	const consumerId = req.body.id;
//
// 	Receivers.findAll({where: {consumer_Id: consumerId}}).then(function(promotions){
// 			const promotion_Arr = [];
//
// 			for(var i in consumers){
// 				promotion_Arr.push([i, promotions[i].promotion_Id]);
// 			}
// 			for(var i = 0; i < promotion_Arr.length; i++){
// 				//var allPromotions = Promotions.findAll({where: {id: promotion_Arr[i]}});
// 			}
// 	});
// });
// const points = req.body.points;

app.post('/submitBarCode', function(req, res){
	const consumerId = req.body.consumer_id;
	const points = req.body.points;
	const vendorId = req.body.vendor_id;

	Points.findOne({where: {consumer_Id: consumerId}}).then(function(consumer){
		database.transaction(function(t) {
			consumer.update({
				points: consumer.points + points
			})
		});
	});
});
// app.get('/getVendorInfo', function(req, res){
// 	const vendorId = req.body.vendor_id;
//
// 	Vendor.findOne({where: {vendor_id: vendorId}}).then(function(vendor){
// 		Promotions.findAll({where: {vendor_Id: vendorId}}).then(funtion(consumers){
// 			Points.findAll()
// 		});
// 	});
// });

app.listen(3003, function() {
     console.log('Server is now running at port 3003');
});
