require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(7);

var sequelize = new Sequelize(process.env.DB_NAME || "wfnpzbqr", process.env.DB_USER || "wfnpzbqr", process.env.DB_PASSWORD || "hALj5TcckVdV29V8g30hiKumtCN7-AJc", {
  host: process.env.DB_HOST || "tantor.db.elephantsql.com",
  port: parseInt(process.env.DB_PORT) || 5432,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    idle: 30000
  },
  define: {
    timestamps: false
  }
});

module.exports = sequelize;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(5);





var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */]);

// Import and Set Nuxt.js options
var config = __webpack_require__(12);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lost__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shelters__ = __webpack_require__(11);







var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__lost__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_3__main__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_4__shelters__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET users listing. */
router.get('/users', function (req, res, next) {
  var query = 'SELECT * FROM publicinfo1;';
  connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (users) {
    console.log(users);
    res.json(users);
  });
});

router.post('/users/update', bodyParser.json(), function (req, res, next) {
  var userid = req.body.data.userid;
  var username = req.body.data.username;
  var password = req.body.data.password;

  var query = 'UPDATE Users SET username = :username, password = :password WHERE userid = :userid ;';
  connection.query(query, {
    type: connection.QueryTypes.UPDATE,
    replacements: {
      username: username,
      password: password,
      userid: userid
    }
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send('/');
  });
});

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  var username = req.body.data.username;
  var password = req.body.data.password;
  var phoneNumber = req.body.data.phoneNumber;

  var query1 = 'INSERT INTO AddressUserPN (phoneNo) VALUES (:phoneNumber) on conflict do nothing;';
  var query2 = 'INSERT INTO Users (username, password, phoneNo) VALUES (:username, :password, :phoneNumber);';
  connection.query(query1, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      phoneNumber: phoneNumber
    }
  }).then(function (result) {
    connection.query(query2, {
      type: connection.QueryTypes.INSERT,
      replacements: {
        username: username,
        password: password,
        phoneNumber: phoneNumber
      }
    }).then(function (result) {
      // result[1] is the number of rows changed
      res.send('/users');
    });
  });
});

// router.get('/users/:username', function (req, res, next) {
//   console.log("creating user endpoint")
//   const username = req.params.username
//   console.log('username: ' + username)
//   const query = 'SELECT * FROM Users WHERE username = :username ;'
//   connection.query(query, 
//     { 
//       type: connection.QueryTypes.SELECT,
//       replacements: {
//         username: username
//       }
//     })
//     .then(user => {
//       console.log('redirect')
//       // res.redirect('/users')
//       // res.send(req.get('referer'))
//       res.json(user[0])
//     }).catch(err => {
//       console.log(err)
//     })
// })

/* GET user by ID. */
router.get('/users/:username', function (req, res, next) {
  var username = req.params.username;
  console.log('username: ' + username);
  var query = 'SELECT * FROM Users WHERE username = :username ;';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      username: username
    }
  }).then(function (user) {
    if (user.length === 1) {
      var password = user[0].password;
      console.log(user);
      console.log('password: ' + password);
      var autoHeader = req.headers['authorization'];
      if (autoHeader === undefined || autoHeader.split(' ')[0] !== 'Basic') {
        res.header('WWW-Authenticate', 'Basic realm="Basic Auth!"');
        res.send(401);
        return next();
      }
      var user_pass = Buffer.from(autoHeader.split(' ')[1], 'base64').toString();
      console.log(user_pass);
      if (user_pass !== username + ':' + password) {
        res.header('WWW-Authenticate', 'Basic realm="Wrong password!"');
        res.send(401);
        return next();
      }
      res.json(user[0]);
    } else {
      res.status(404).json({});
    }
  });
});

router.post('/users/:username', bodyParser.json(), function (req, res, next) {
  // const userid = req.body.data.userid
  var username = req.params.username;
  // const password = req.body.data.password
  if (!req.body.data) {
    var query = 'SELECT * FROM pet p, users u, lost l WHERE p.uid=u.userid AND u.username=:username AND p.pid=l.pid;';
    connection.query(query, {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        username: username
      }
    }).then(function (result) {
      console.log(result);
      res.json(result[0]);
    });
  } else {
    var pid = req.body.data.pid;
    var date = new Date();
    var dd = date.getDate();
    var mm = void 0;
    if (date.getMonth < 10) {
      mm = '0' + date.getMonth() + 1;
    } else {
      mm = date.getMonth() + 1;
    }
    var yyyy = date.getFullYear();
    var day = yyyy + '-' + mm + '-' + dd;
    var hh = date.getHours();
    var mins = date.getMinutes();
    var ss = date.getSeconds();
    if (hh < 10) {
      hh = '0' + hh;
    }
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (ss < 10) {
      ss = '0' + ss;
    }
    var time = hh + ':' + mins + ':' + ss;
    var _query = 'DELETE FROM lost WHERE pid=:pid; INSERT INTO found (pid, founddate, foundtime) VALUES ' + '(:pid, :day, :time) ;';
    connection.query(_query, {
      type: connection.QueryTypes.DELETE,
      replacements: {
        pid: pid,
        day: day,
        time: time
      }
    }).then(function (result) {
      // result[1] is the number of rows changed
      // res.send(req.get('referer'));
      res.json(result);
    });
  }
});

router.post('/users', bodyParser.json(), function (req, res, next) {
  var userid = req.body.data.userid;
  var query = 'DELETE FROM Users WHERE userid = :userid;';
  connection.query(query, {
    type: connection.QueryTypes.DELETE,
    replacements: {
      userid: userid
    }
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send(req.get('referer'));
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET pets listing. */
router.get('/lost', function (req, res, next) {
  var query = 'SELECT * FROM Pet, Lost WHERE Pet.pid = Lost.pid;';
  connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (lost) {
    // console.log(lost)
    res.json(lost);
  });
});

/* GET lost pets within radius. */
/* router.get('/lost', function (req, res, next) {
  const lat = req.body.data.lat
  const lon = req.body.data.lon
  const radius = req.body.data.radius
  const query = 'SELECT *, SQRT(ABS(lostLat-:lat)*ABS(lostLat-:lat)'
                         + 'ABS(lostLon-:lon)*ABS(lostLon-:lon))' 
                         + 'AS distance FROM Pet WHERE distance <= radius ;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(lost => {
      console.log(lost)
      res.json(lost)
    })
}) */

router.get('/lost/:pid', function (req, res, next) {
  var pid = req.params.pid;
  var query = 'SELECT * FROM Pet, Lost WHERE Pet.pid = :pid and Pet.pid = Lost.pid;';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      pid: pid
    }
  }).then(function (pet) {
    if (pet.length === 1) {
      console.log(pet);
      res.json(pet[0]);
    } else {
      res.status(404).json({});
    }
  }).catch(function (err) {
    console.log(err, null);
  });
});

/* GET pets listing. */
router.get('/lost/add/reward-summary', function (req, res, next) {
  var query = 'SELECT animalType, avg(amount) FROM reward, pet, pettype WHERE Reward.pid = Pet.pid and PetType.breed = Pet.breed GROUP BY animaltype;';
  connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (reward) {
    console.log(reward);
    res.json(reward);
  });
});

router.get('/lost/:pid/sightings/all', function (req, res, next) {
  var pid = req.params.pid;
  var query = 'SELECT * FROM Sighting WHERE Sighting.pid = :pid;';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      pid: pid
    }
  }).then(function (sightings) {
    console.log('got sightings');
    console.log(sightings);
    res.json(sightings);
  }).catch(function (err) {
    console.log(err, null);
  });
});
/*
router.post('/lost/update', bodyParser.json(), function (req, res, next) {
  const userid = req.body.data.userid
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'UPDATE Pets SET username = :username, password = :password WHERE userid = :userid ;'
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        username: username,
        password: password,
        userid: userid
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/lost')
    })
})
*/

router.post('/lost/delete/:pid', bodyParser.json(), function (req, res, next) {
  var pid = req.params.pid;
  var query = 'DELETE FROM Lost WHERE pid = :pid;';
  connection.query(query, {
    type: connection.QueryTypes.DELETE,
    replacements: {
      pid: pid
    }
  }).then(function (lost) {
    console.log(lost);
    res.json(lost);
  });
});

router.post('/lost', bodyParser.json(), function (req, res, next) {
  // const pid = req.body.data.pid
  // 
  var lat = req.body.data.lostLat;
  var lon = req.body.data.lostLong;
  var radius = req.body.data.radius;
  var query = 'SELECT * FROM lost l, pet p WHERE SQRT((lostLat-:lat)*(lostLat-:lat) + (lostLong-:lon)*(lostLong-:lon)) <= :radius ' + 'AND l.pid = p.pid';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      lat: lat,
      lon: lon,
      radius: radius
    }
  }).then(function (lost) {
    console.log(lost);
    res.json(lost);
  });
  // .then(result => {
  //   // result[1] is the number of rows changed
  //   res.send('/lost')
  // })
});

router.post('/lost/add', bodyParser.json(), function (req, res, next) {
  console.log(req.body.data);
  var species = req.body.data.species;
  var breed = req.body.data.breed;
  var name = req.body.data.name;
  var sex = req.body.data.sex;
  var dob = req.body.data.birthDate;
  var time = req.body.data.lostTime;
  var date = req.body.data.lostDate;
  var lat = req.body.data.lostLat;
  var long = req.body.data.lostLong;
  var reward = req.body.data.reward;
  var uid = req.body.data.uid;

  console.log('adding lost pet...');

  var query = 'INSERT INTO pettype (breed, animalType) VALUES (:breed, :species) on conflict (breed) do nothing;';
  var query2 = 'INSERT INTO pet (uid, name, sex, breed, birthDate, regDate) VALUES (:uid, :name, :sex, :breed, :dob, CURRENT_DATE) ;';
  var query3 = 'INSERT INTO lost (pid, lostDate, lostTime, lostLat, lostLong) VALUES ((SELECT currval(\'pet_pid_seq\')), :date, :time, :lat, :long) ;';
  var query4 = 'INSERT INTO reward (uid, pid, amount) VALUES (:uid, (SELECT currval(\'pet_pid_seq\')), :reward);';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      species: species,
      breed: breed
    }
  }).then(function (result) {
    connection.query(query2, {
      type: connection.QueryTypes.INSERT,
      replacements: {
        name: name,
        sex: sex,
        breed: breed,
        dob: dob,
        uid: uid
      }
    }).then(function (result) {
      connection.query(query3, {
        type: connection.QueryTypes.INSERT,
        replacements: {
          name: name,
          date: date,
          time: time,
          lat: lat,
          long: long
        }
      }).then(function (result) {
        connection.query(query4, {
          type: connection.QueryTypes.INSERT,
          replacements: {
            reward: reward,
            uid: uid
          }
        }).then(function (result) {
          res.send('/lost');
        });
      });
    });
  }).catch(function (error) {
    console.log("encountered an error");
    console.log(error);
  });
});

router.get('/lost/:pid/sighting', function (req, res, next) {
  var pid = req.params.pid;
  var response = {
    errors: [],
    uid: '',
    pid: pid,
    date: '',
    time: '',
    latitude: '',
    longitude: ''
  };
  res.json(response);
});

router.post('/lost/sighting', bodyParser.json(), function (req, res, next) {
  console.log('got request');
  console.log(req.body.data);
  var uid = req.body.data.uid;
  var pid = req.body.data.pid;
  var time = req.body.data.time;
  var date = req.body.data.date;
  var lat = req.body.data.latitude;
  var long = req.body.data.longitude;
  var desc = req.body.data.description;
  var query = 'INSERT INTO sighting (date, time, lat, long, description, pid, uid) VALUES (:date, :time, :lat, :long, :desc, :pid, :uid) ;';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      date: date,
      time: time,
      lat: lat,
      long: long,
      desc: desc,
      uid: uid,
      pid: pid
    }
  }).then(function (lost) {
    console.log(lost);
    res.json(lost);
  });
  // .then(result => {
  //   // result[1] is the number of rows changed
  //   res.send('/lost')
  // })
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);


var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET users listing. */
router.get('/users', function (req, res, next) {
  var query = 'SELECT * FROM Users;';
  connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (users) {
    console.log(users);
    res.json(users);
  });
});

router.get('/signin', function (req, res, next) {
  var autoHeader = req.headers['authorization'];
  if (autoHeader === undefined || autoHeader.split(' ')[0] !== 'Basic') {
    res.header('WWW-Authenticate', 'Basic realm="Basic Auth!"');
    res.send(401);
    return next();
  }
  var user_pass = Buffer.from(autoHeader.split(' ')[1], 'base64').toString();
  var username = user_pass.split(':')[0];
  var query = 'SELECT * FROM Users WHERE username = :username ;';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      username: username
    }
  }).then(function (user) {
    if (user.length === 1) {
      var password = user[0].password;
      if (user_pass !== username + ':' + password) {
        res.header('WWW-Authenticate', 'Basic realm="Wrong password!"');
        res.send(401);
        return next();
      }
      res.json(username);
    } else {
      res.status(404).json({});
    }
  });
});

/* GET user by ID. */
// router.get('/users/:username', function (req, res, next) {
//   const username = req.params.username
//   const query = 'SELECT * FROM Users WHERE username = :username ;'
//   connection.query(query, 
//     { 
//       type: connection.QueryTypes.SELECT,
//       replacements: {
//         username: username
//       }
//     })
//     .then(user => {
//       if (user.length === 1 ) {
//         res.json(user[0])
//       } else {
//         res.status(404).json({})
//       }
//     })
// })

router.post('/users/update', bodyParser.json(), function (req, res, next) {
  var userid = req.body.data.userid;
  var username = req.body.data.username;
  var password = req.body.data.password;

  var query = 'UPDATE Users SET username = :username, password = :password WHERE userid = :userid ;';
  connection.query(query, {
    type: connection.QueryTypes.UPDATE,
    replacements: {
      username: username,
      password: password,
      userid: userid
    }
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send('/users');
  });
});

router.post('/main', bodyParser.json(), function (req, res, next) {
  // const userid = req.body.data.userid
  var query = __WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"]("./db/CreateUsersTable.sql", "utf-8");
  connection.query(query, {
    type: connection.QueryTypes.DELETE
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send('/');
  });
});

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  var userid = req.body.data.userid;
  var username = req.body.data.username;
  var password = req.body.data.password;

  var query = 'INSERT INTO Users (username, password) VALUES (:username, :password) ;';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      username: username,
      password: password
    }
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send('/users');
  });
});

/* GET pets listing. */
router.get('/reward-summary', function (req, res, next) {
  var query = 'SELECT animalType, round(avg(amount)::numeric,2) AS amount FROM reward, pet, pettype WHERE Reward.pid = Pet.pid and PetType.breed = Pet.breed GROUP BY animaltype;';
  connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (reward) {
    console.log(reward);
    res.json(reward);
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET pets listing. */
router.get('/shelters', function (req, res, next) {
  var query = 'SELECT * FROM Shelter;';
  connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (shelters) {
    console.log(shelters);
    res.json(shelters);
  });
});

router.get('/shelters/:agencyname/:postalcode', function (req, res, next) {
  var postalCode = req.params.postalcode;
  var agencyname = req.params.agencyname;
  console.log("pc: " + postalCode + "   agency: " + agencyname);
  var query = 'SELECT * FROM Shelter WHERE agencyname=:agencyname';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      agencyname: agencyname
    }
  }).then(function (usernames) {
    console.log(usernames);
    res.json(usernames);
  });
});

router.post('/shelters/:agencyname/:postalcode', bodyParser.json(), function (req, res, next) {
  var postalCode = req.params.postalcode;
  var agencyname = req.params.agencyname;
  var breed = req.body.data.breed;
  console.log("pc: " + postalCode + "   agency: " + agencyname + "   breed: " + breed);
  var query = 'SELECT u.username FROM adoption a, sheltered s, pet p, users u ' + 'WHERE a.uid=u.userid AND a.tid=s.tid AND s.postalcode=:postalCode ' + 'AND s.agencyname=:agencyname AND p.breed=:breed;';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      breed: breed,
      postalCode: postalCode,
      agencyname: agencyname
    }
  }).then(function (usernames) {
    console.log(usernames);
    res.json(usernames);
  }).catch(function (error) {
    console.log("Error: " + error);
  });
});

/* GET user by ID. */
router.get('/shelters/:agencyname', function (req, res, next) {
  console.log("getting campuses...");
  var agencyname = req.params.agencyname;
  var query = 'SELECT * FROM campus WHERE agencyname = :agencyname ;';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      agencyname: agencyname
    }
  }).then(function (agency) {
    console.log(agency);
    res.json(agency);
  }).catch(function (err) {
    console.log(err, null);
  });
});
/*
router.post('/lost/update', bodyParser.json(), function (req, res, next) {
  const userid = req.body.data.userid
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'UPDATE Pets SET username = :username, password = :password WHERE userid = :userid ;'
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        username: username,
        password: password,
        userid: userid
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/lost')
    })
})
*/

router.post('/lost', bodyParser.json(), function (req, res, next) {
  // const pid = req.body.data.pid
  // const query = 'DELETE FROM Pets WHERE pid = :pid;'
  var lat = req.body.data.lostLat;
  var lon = req.body.data.lostLong;
  var radius = req.body.data.radius;
  var query = 'SELECT * FROM lost l, pet p WHERE SQRT((lostLat-:lat)*(lostLat-:lat) + (lostLong-:lon)*(lostLong-:lon)) <= :radius ' + 'AND l.pid = p.pid';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      lat: lat,
      lon: lon,
      radius: radius
    }
  }).then(function (lost) {
    console.log(lost);
    res.json(lost);
  });
  // .then(result => {
  //   // result[1] is the number of rows changed
  //   res.send('/lost')
  // })
});

router.post('/lost/add', bodyParser.json(), function (req, res, next) {
  console.log(req.body.data);
  var pid = req.body.data.pid;
  var species = req.body.data.species;
  var breed = req.body.data.breed;
  var name = req.body.data.name;
  var sex = req.body.data.sex;

  console.log('adding lost pet...');

  var query = 'INSERT INTO pettype (breed, animalType) VALUES (:breed, :species) on conflict (breed) do nothing;';
  var query2 = 'INSERT INTO pet (name, sex, breed) VALUES (:name, :sex, :breed) ;';
  var query3 = 'INSERT INTO lost (pid) VALUES ((SELECT p.pid FROM pet p where p.name = :name)) ;';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      species: species,
      breed: breed
    }
  }).then(function (result) {
    connection.query(query2, {
      type: connection.QueryTypes.INSERT,
      replacements: {
        name: name,
        sex: sex,
        breed: breed
      }
    }).then(function (result) {
      connection.query(query3, {
        type: connection.QueryTypes.INSERT,
        replacements: {
          pid: pid,
          name: name
        }
      }).then(function (result) {
        // result[1] is the number of rows changed
        res.send('/lost');
      });
    });
  }).catch(function (error) {
    console.log("encountered an error");
    console.log(error);
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },

  modules: ['@nuxtjs/pwa']
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map