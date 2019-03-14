import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  const query = 'SELECT * FROM publicinfo1;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(users => {
      console.log(users)
      res.json(users)
    })
})

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
      res.send('/')
    })
})

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  const username = req.body.data.username
  const password = req.body.data.password
  const phoneNumber = req.body.data.phoneNumber

  const query1 = 'INSERT INTO AddressUserPN (phoneNo) VALUES (:phoneNumber) on conflict do nothing;'
  const query2 = 'INSERT INTO Users (username, password, phoneNo) VALUES (:username, :password, :phoneNumber);'
  connection.query(query1,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        phoneNumber: phoneNumber
      }
    })
    .then(result => {
      connection.query(query2,
        {
          type: connection.QueryTypes.INSERT,
          replacements: {
            username: username,
            password: password,
            phoneNumber: phoneNumber
          }
        }).then(result => {
          // result[1] is the number of rows changed
          res.send('/users')
        })
    })
})

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
  const username = req.params.username
  console.log('username: ' + username)
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
        console.log(user)
        console.log('password: ' + password)
        let autoHeader = req.headers['authorization']
        if (autoHeader === undefined || autoHeader.split(' ')[0] !== 'Basic') {
          res.header('WWW-Authenticate', 'Basic realm="Basic Auth!"')
          res.send(401)
          return next()
        }
        let user_pass = Buffer.from(autoHeader.split(' ')[1], 'base64').toString()
        console.log(user_pass)
        if (user_pass !== username + ':' + password) {
          res.header('WWW-Authenticate', 'Basic realm="Wrong password!"')
          res.send(401)
          return next()
        }
        res.json(user[0])
      } else {
        res.status(404).json({})
      }
    })
})

router.post('/users/:username', bodyParser.json(), function (req, res, next) {
  // const userid = req.body.data.userid
  const username = req.params.username
  // const password = req.body.data.password
  if (!req.body.data) {
    const query = 'SELECT * FROM pet p, users u, lost l WHERE p.uid=u.userid AND u.username=:username AND p.pid=l.pid;'
    connection.query(query,
      {
        type: connection.QueryTypes.UPDATE,
        replacements: {
          username: username
        }
      })
      .then(result => {
        console.log(result)
        res.json(result[0])
      })
  } else {
    const pid = req.body.data.pid
    const date = new Date()
    const dd = date.getDate()
    let mm
    if (date.getMonth < 10) {
      mm = '0' + date.getMonth() + 1
    } else {
      mm = date.getMonth() + 1
    }
    const yyyy = date.getFullYear()
    const day = yyyy + '-' + mm + '-' + dd
    let hh = date.getHours()
    let mins = date.getMinutes()
    let ss = date.getSeconds()
    if (hh < 10) {
      hh = '0' + hh
    }
    if (mins < 10) {
      mins = '0' + mins
    }
    if (ss < 10) {
      ss = '0' + ss
    }
    const time = hh + ':' + mins + ':' + ss
    const query = 'DELETE FROM lost WHERE pid=:pid; INSERT INTO found (pid, founddate, foundtime) VALUES '
    + '(:pid, :day, :time) ;'
    connection.query(query,
      {
        type: connection.QueryTypes.DELETE,
        replacements: {
          pid: pid,
          day: day,
          time: time
        }
      })
      .then(result => {
        // result[1] is the number of rows changed
        // res.send(req.get('referer'));
        res.json(result)
      })
  }
})

router.post('/users', bodyParser.json(), function (req, res, next) {
  const userid = req.body.data.userid
  const query = 'DELETE FROM Users WHERE userid = :userid;'
  connection.query(query,
    {
      type: connection.QueryTypes.DELETE,
      replacements: {
        userid: userid
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send(req.get('referer'));
    })
})

export default router
