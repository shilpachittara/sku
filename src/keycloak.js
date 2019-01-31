//var mysql = require('mysql');
var http = require("http");
var MongoClient = require('mongodb').MongoClient;
//var url= "mongodb://admin:admin@localhost:27017/webApp"
var url= "mongodb://localhost:27017/webApp"
var express = require('express');
var app = express();
const Cryptr = require('cryptr');
const cryptr = new Cryptr('wow!asecuritysecret');

var session = require('express-session');
var Keycloak = require('keycloak-connect');
var memoryStore = new session.MemoryStore();
// let kcConfig = {
//     clientId: 'tutorial-backend',
//     bearerOnly: true,
//     serverUrl: 'http://localhost:8080/auth',
//     realm: 'Demo-Realm',
//     realmPublicKey: 'B9Kp5FXcvwPsWLUp6ivpKN2lF7vVPdbkDMJJ_c0_mWM',
//     clientSecret: '085328d6-3b8b-47c0-a00c-ca7d49404035'
// };
var keycloak = new Keycloak({ store: memoryStore });

app.use(session({
  secret:'thisIsReallyLongAndSecureSecreT',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use( keycloak.middleware( {
logout: '/logout',
admin: '/',} ));

app.use( function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( keycloak.middleware( {
logout: '/logout',
admin: '/',} ));

//app.get('/test', keycloak.protect(), function(req,res){res.send("okay")});

// mailer cofig start
//var events= require('events');
var nodemailer= require('nodemailer');

// var mailOptions={
// from: 'piyush96.alcheringa@gmail.com',
// to: 'legendarypiyush@gmail.com',
// subject: 'New SKU generated',
// text: 'An SKU with sku_id ${req.body.skuCode} has been generated'
// }

// var eventEmitter= new events.EventEmitter();
// var myEventHandler= function(){
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
// }
// eventEmitter.on('login',myEventHandler);
//mailer config end

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/test', function(req,res){
	res.send("okay");
})

var port = 8000;

//create a new sku
app.post('/addsku', keycloak.protect(), function(req, main_res) {
	status=500;
    MongoClient.connect(url, function(err, db) {
	  if (err) console.error(err);
	  var dbo = db.db("webApp");

  	  var sender=null;
  	  var receiver=[];
	  dbo.createCollection("sku", function(err,res) {
	    if (err) console.error(err);
	    else console.log("Collection created!");
	    //db.close();
	  
		  dbo.collection("sku").insertOne({
		  	_id:req.body.skuCode,
			category:req.body.category,
			subCategory:req.body.subCategory,
			HSNCode:req.body.HSNCode,
			brand:req.body.brand,
			gender:req.body.gender,
			collection:req.body.collection,
			colour:req.body.colour,
			colourVariation:req.body.colourVariation,
			size:req.body.size,
			manufacturingYear:req.body.manufacturingYear,
			subBrand:req.body.subBrand,
			groupId:req.body.groupId,
			styleCode:req.body.styleCode,
			sizeCode:req.body.sizeCode,
			skuCode:req.body.skuCode,
			productName:req.body.productName,
			actualColour:req.body.actualColour,
			productDescription:req.body.productDescription,
			itemWeight:req.body.itemWeight,
			itemLength:req.body.itemLength,
			itemHeight:req.body.itemHeight,
			itemWidth:req.body.itemWidth,
			itemVolume:req.body.itemVolume,
			packageWeight:req.body.packageWeight,
			packageLength:req.body.packageLength,	
			packageHeight:req.body.packageHeight,
			packageWidth:req.body.packageWidth,
			volumetricWeight:req.body.volumetricWeight,
			basicCost:req.body.basicCost,
			// digitalPrint_cost:req.body.brandingCost.digitalPrint.cost,
			// digitalPrint_quantity:req.body.brandingCost.digitalPrint.quantity,
			// digitalPrint_total:req.body.brandingCost.digitalPrint.total,
			// embroidery_cost:req.body.brandingCost.embroidery.cost,
			// embroidery_quantity:req.body.brandingCost.embroidery.quantity,
			// embroidery_total:req.body.brandingCost.embroidery.total,
		    fulfillmentCost:req.body.fulfillmentCost,
			margin:req.body.margin,
			tax:req.body.tax,
			b2bSellingPrice:req.body.b2bSellingPrice,
			mrp:req.body.mrp,
			sellingPrice:req.body.sellingPrice,
			discount:req.body.discount,
			status:60
			}, function(err,res){
		  		if(err){
	  				main_res.statusMessage=err;
	  				main_res.send(500);
	  				console.error(err);
	  				//change error code for dulpicate key, match code in frontend, forward skuCode to /getsku url
		  		}	
		  		else {
		  			console.log("1 document inserted");
			  		dbo.collection("user").find({"role":"admin"}).toArray(function(err,result1){ 
						sender= result1[0];
						dbo.collection("user").find({"role":"fulfillment"},{projection:{"_id":0,"mail":1}}).toArray(function(err,result2){
							if(err)	console.error(err);
							console.log("-----------------");				
							//receiver= result2;
							result2.forEach(function(u){console.log(receiver.push(u.mail))});
							db.close();
							console.log(sender);
							console.log(receiver);
							if(sender!=null && receiver.length>0){
									var transporter= nodemailer.createTransport({
									    service: 'gmail',
									    auth:{
									        user: sender.mail,
									        pass: cryptr.decrypt(sender.pass)
									    }
									});
				
									var mailOptions={
										from: sender.mail,
										to: receiver,
										subject: 'New SKU Request',
										text: "A request with sku_id "+ req.body.skuCode +" has been generated"
									}
									transporter.sendMail(mailOptions, function(error, info){
								    	if (error) {
		    			  				main_res.statusMessage=error.code;
										main_res.send(500);	
								    	console.log(error);
								    	} else {
								    	console.log('Email sent: ' + info.response);
								    	main_res.send(200);						    	
								    	}
									});	
							}
							else {
								console.log("sender or receiver not present in database");
				  				main_res.statusMessage="sender or receiver not present in database";
				  				//main_res.body="sender or receiver not present in database"
		  						main_res.send(500);
							}
						});
					
					});
		  		}
		  	});
		});
	});
//    eventEmitter.emit('login');
    //res.status(status).send(req.body);
});

//show existing sku for showtable
app.get('/showsku', keycloak.protect(), function(req,res){

	MongoClient.connect(url, function(err, db) {
		if(err)	console.error(err);
		var dbo = db.db("webApp");
		var query={};
		dbo.collection("sku").find().toArray(function(err,result){
			if(err)	console.error(err);
			console.log(result);
			res.send(result);
			db.close();
		});
	}); 
});	

//get existing sku for a skuid
app.post('/getsku', keycloak.protect(), function(req,res){
	console.log(req.body.skucode);
	MongoClient.connect(url, function(err, db) {
		if(err)	console.error(err);
		var dbo = db.db("webApp");
		var query={"_id":req.body.skucode};
		dbo.collection("sku").find(query).toArray(function(err,result){
			if(err)	console.error(err);
			console.log(result[0]);
			res.send(result[0]);
			db.close();
		});
	}); 
});	

//update existing sku
app.post('/updatesku', keycloak.protect(), function(req,res){

	MongoClient.connect(url, function(err, db) {
		if(err)	console.error(err);
		var dbo = db.db("webApp");
		var query={"_id":req.body.skucode};
		var add={}
		dbo.collection("sku").update(query,{$set:add},function(err,result){
			if(err)	{
				console.error(err);
				res.statusMessage=err;
				res.send(500);
				}
			else{	
				console.log("sku id: "+req.body.skucode+" has been updated!");
				res.statusMessage="Update succesfull";
				res.send(200);
			}
			db.close();
		});
	});
});

//add new categories
app.post('/add', keycloak.protect(), function(req, res_main) {

    MongoClient.connect(url, function(err, db) {
	  if (err) {
	  	console.error(err)
	  };
	  var dbo = db.db("webApp");
	  console.log("---------------------------"+req.body);
	  dbo.createCollection(req.body.db, function(err, res) {
	    if (err) console.error(err);
	    else console.log("Collection created!");
	    //db.close();
	  });
	  if(req.body.db=="subcategory" || req.body.db=="collection" || req.body.db=="colourvariation"){
	  	dbo.collection(req.body.db).insertOne({
		  	_id:req.body.code,
		  	nameCode:req.body.nameCode,
		  	subnameCode:req.body.subnameCode,
			name:req.body.name,
			subname:req.body.subname,
			status:1
			}, function(err,res){
		  		if(err){	
		  			console.error(err);
		  			res_main.statusMessage=err;
					res_main.send(500);
		  		}
		  		else{ 
		  			console.log("1 document inserted");
		  			res_main.send(200);
		  		}
		  		db.close();
		    });
	  }
	  else{
		  dbo.collection(req.body.db).insertOne({
		  	_id:req.body.code,
			name:req.body.name,
			status:1
		  }, function(err,res){
		  	if(err){	
		  			console.error(err);
		  			res_main.statusMessage=err;
					res_main.send(500);
		  	}
	  		else{ 
	  			console.log("1 document inserted");
		  		res_main.send(200);
	  		}
		  	db.close();
		  });
		}
	//db.close();
	});
	//res.send(200);
});

//inactivate a category
app.post('/inactive', keycloak.protect(), function(req, res) {

    MongoClient.connect(url, function(err, db) {
		if(err)	console.error(err);
		var dbo = db.db("webApp");
		var query={"_id":req.body.code};
		var add={"status":0}
		dbo.collection(req.body.db).update(query,{$set:add},function(err,result){
			if(err){	
	  			console.error(err);
	  			res.statusMessage=err;
				res.send(500);
	  		}
			else{
				console.log("sku id: "+req.body.code+" has been updated!");
				res.send(result);
			}
			db.close();
		});
	});
});

//activate a category
app.post('/active', keycloak.protect(), function(req, res) {

    MongoClient.connect(url, function(err, db) {
		if(err)	console.error(err);
		var dbo = db.db("webApp");
		var query={"_id":req.body.code};
		var add={"status":1}
		dbo.collection(req.body.db).update(query,{$set:add},function(err,result){
			if(err){	
	  			console.error(err);
	  			res.statusMessage=err;
				res.send(500);
	  		}
	  		else{
	  			console.log("sku id: "+req.body.code+" has been updated!");
				res.send(result);
			}
			db.close();
		});
	});
});

//get list for dropdown
app.post('/get', keycloak.protect(), function(req, res) {

    MongoClient.connect(url, function(err, db) {
		if(err){	
  			console.error(err);
  			res.statusMessage=err;
			res.send(500);
	  	}
	  	else{
	  		var dbo = db.db("webApp");
			if(req.body.db=="collection" || req.body.db=="subcategory" || req.body.db=="colourvariation"){
				var query={"status":1, "name":req.body.name};		  	
				dbo.collection(req.body.db).find(query,{projection:{"_id":0,"subname":1,"subnameCode":1}}).toArray(function(err,result){
					if(err){	
		  				console.error(err);
		  				res.statusMessage=err;
						res.send(500);
			  		}
			  		else{
			  			console.log(result);
						res.send(result);
					}
					db.close();
				});
		  	}
			else{
				var query={"status":1};
				dbo.collection(req.body.db).find(query,{projection:{"name":1}}).toArray(function(err,result){
					if(err){	
		  				console.error(err);
		  				res.statusMessage=err;
						res.send(500);
			  		}
			  		else{
			  			console.log(result);
						res.send(result);
					}
					db.close();
				});
			}
		}
	});
});

//get list for showtable
app.post('/show', keycloak.protect(), function(req,res){

	MongoClient.connect(url, function(err, db) {
		if(err){	
			console.error(err);
			res.statusMessage=err;
			res.send(500);
  		}
  		else{
  			var dbo = db.db("webApp");
			var query={};
			dbo.collection(req.body.db).find().sort({"name":1}).toArray(function(err,result){
				if(err){	
					console.error(err);
					res.statusMessage=err;
					res.send(500);
				}
				else{
					console.log(result);
					res.send(result);
				}
				db.close();
			});
		}
	}); 
});

//add new email
app.post('/role', keycloak.protect(), function(req, res_main) {

    MongoClient.connect(url, function(err, db) {
		if(err){	
			console.error(err);
			res.statusMessage=err;
			res.send(500);
		}
		var dbo = db.db("webApp");

		dbo.createCollection(req.body.db, function(err, res) {
			if (err) console.error(err);
	    	else console.log("Collection created!");
	    //db.close();
	  	});
		if(req.body.role=="admin"){
				dbo.collection(req.body.db).insertOne({
			  		role:req.body.role,  //role:{fulfillment,operations,customer}
					mail:req.body.mail,
					pass:cryptr.encrypt(req.body.password) 
				},  function(err,res){
			  			if (err){	
			  					console.error(err);
			  					res_main.statusMessage=err;
			  					res_main.send(500);
			  				}	
		  				else{	
		  					console.log("1 document inserted");
			  				res_main.send(200);
			  			}
			  			db.close();
			  		}
			  	);
			}
		else{
			dbo.collection(req.body.db).insertOne({
			  		role:req.body.role,  //role:{fulfillment,operations,customer}
					mail:req.body.mail,
				},  function(err,res){
			  			if (err){	
			  					console.error(err);
			  					res_main.statusMessage=err;
			  					res_main.send(500);
			  				}	
		  				else{	
		  					console.log("1 document inserted");
			  				res_main.send(200);
			  			}
			  			db.close();
			  		}
			  	);
		}
	});
});

//get emails for showtable
app.post('/showrole', keycloak.protect(), function(req,res){

	MongoClient.connect(url, function(err, db) {
		if(err)	console.error(err);
		var dbo = db.db("webApp");
		var query={};
		dbo.collection(req.body.db).find({},{projection:{"_id":0,"pass":0}}).sort({"role":1}).toArray(function(err,result){
			if (err){	
				console.error(err);
				res_main.statusMessage=err;
				res_main.send(500);
			}
			else{
				console.log(result);
				res.send(result);
			}
			db.close();
		});
	}); 
});

//remove an email
app.post('/removemail', keycloak.protect(), function(req,res){

	MongoClient.connect(url, function(err, db) {
		if(err)	console.error(err);
		var dbo = db.db("webApp");
		var query={"email":req.body.email};
		dbo.collection(req.body.db).remove(query,function(err,result){
			if (err){	
  				console.error(err);
  				res.statusMessage=err;
  				res.send(500);
  				}
			else {
				console.log(result);
				res.send(result);
			}
				db.close();
		});
	}); 
});

//start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);