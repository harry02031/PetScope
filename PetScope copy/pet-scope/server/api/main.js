import { Router } from 'express'
import * as fs from "fs"
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  const query = 'SELECT * FROM Users;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(users => {
      console.log(users)
      res.json(users)
    })
})

router.get('/signin', function (req, res, next) {
  let autoHeader = req.headers['authorization']
  if (autoHeader === undefined || autoHeader.split(' ')[0] !== 'Basic') {
    res.header('WWW-Authenticate', 'Basic realm="Basic Auth!"')
    res.send(401)
    return next()
  }
  let user_pass = Buffer.from(autoHeader.split(' ')[1], 'base64').toString()
  const username = user_pass.split(':')[0]
  const query = 'SELECT * FROM Users WHERE username = :username ;'
  connection.query(query, 
    { 
      type: connection.QueryTypes.SELECT,
      replacements: {
        username: username
      }
    })
    .then(user => {
      if (user.length === 1) {
        const password = user[0].password
        if (user_pass !== username + ':' + password) {
          res.header('WWW-Authenticate', 'Basic realm="Wrong password!"')
          res.send(401)
          return next()
        }
        res.json(username)
      } else {
        res.status(404).json({})
      }
    })
})

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
  const userid = req.body.data.userid
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'UPDATE Users SET username = :username, password = :password WHERE userid = :userid ;'
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
      res.send('/users')
    })
})

router.post('/main', bodyParser.json(), function (req, res, next) {
  // const userid = req.body.data.userid
  const query = fs.readFileSync("./db/CreateUsersTable.sql", "utf-8");
  connection.query(query,
    {
      type: connection.QueryTypes.DELETE
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/')
    })
})

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  const userid = req.body.data.userid
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'INSERT INTO Users (username, password) VALUES (:username, :password) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        username: username,
        password: password
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

/* GET pets listing. */
router.get('/reward-summary', function (req, res, next) {
  const query = 'SELECT animalType, round(avg(amount)::numeric,2) AS amount FROM reward, pet, pettype WHERE Reward.pid = Pet.pid and PetType.breed = Pet.breed GROUP BY animaltype;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(reward => {
      console.log(reward)
      res.json(reward)
    })
})

export default router
