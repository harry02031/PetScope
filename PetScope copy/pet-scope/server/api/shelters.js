import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET pets listing. */
router.get('/shelters', function (req, res, next) {
  const query = 'SELECT * FROM Shelter;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(shelters => {
      console.log(shelters)
      res.json(shelters)
    })
})

router.get('/shelters/:agencyname/:postalcode', function (req, res, next) {
  const postalCode = req.params.postalcode
  const agencyname = req.params.agencyname
  console.log("pc: " + postalCode + "   agency: " + agencyname)
  const query = 'SELECT * FROM Shelter WHERE agencyname=:agencyname'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        agencyname: agencyname
      }
    })
    .then(usernames => {
      console.log(usernames)
      res.json(usernames)
    })
})

router.post('/shelters/:agencyname/:postalcode', bodyParser.json(), function (req, res, next) {
  const postalCode = req.params.postalcode
  const agencyname = req.params.agencyname
  const breed = req.body.data.breed
  console.log("pc: " + postalCode + "   agency: " + agencyname + "   breed: " + breed)
  const query = 'SELECT u.username FROM adoption a, sheltered s, pet p, users u '
                + 'WHERE a.uid=u.userid AND a.tid=s.tid AND s.postalcode=:postalCode '
                + 'AND s.agencyname=:agencyname AND p.breed=:breed;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        breed: breed,
        postalCode: postalCode,
        agencyname: agencyname
      }
    })
    .then(usernames => {
      console.log(usernames)
      res.json(usernames)
    })
    .catch(error => {
      console.log("Error: " + error)
    })
})

/* GET user by ID. */
router.get('/shelters/:agencyname', function (req, res, next) {
  console.log("getting campuses...")
  const agencyname = req.params.agencyname
  const query = 'SELECT * FROM campus WHERE agencyname = :agencyname ;'
  connection.query(query, 
    { 
      type: connection.QueryTypes.SELECT,
      replacements: {
        agencyname: agencyname
      }
    })
    .then(agency => {
      console.log(agency)
      res.json(agency)
    })
    .catch(function(err) {
      console.log(err, null)
    });
})
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
  const lat = req.body.data.lostLat
  const lon = req.body.data.lostLong
  const radius = req.body.data.radius
  const query = 'SELECT * FROM lost l, pet p WHERE SQRT((lostLat-:lat)*(lostLat-:lat) + (lostLong-:lon)*(lostLong-:lon)) <= :radius '
                + 'AND l.pid = p.pid'
  connection.query(query, { 
    type: connection.QueryTypes.SELECT,
    replacements: {
      lat: lat,
      lon: lon,
      radius: radius
    }
  })
    .then(lost => {
      console.log(lost)
      res.json(lost)
    })
    // .then(result => {
    //   // result[1] is the number of rows changed
    //   res.send('/lost')
    // })
})

router.post('/lost/add', bodyParser.json(), function (req, res, next) {
  console.log(req.body.data)
  const pid = req.body.data.pid
  const species = req.body.data.species
  const breed = req.body.data.breed
  const name = req.body.data.name
  const sex = req.body.data.sex

  console.log('adding lost pet...')

  const query = 'INSERT INTO pettype (breed, animalType) VALUES (:breed, :species) on conflict (breed) do nothing;'
  const query2 = 'INSERT INTO pet (name, sex, breed) VALUES (:name, :sex, :breed) ;'
  const query3 = 'INSERT INTO lost (pid) VALUES ((SELECT p.pid FROM pet p where p.name = :name)) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        species: species,
        breed: breed
      }
    })
    .then(result => {
      connection.query(query2,
      {
        type: connection.QueryTypes.INSERT,
        replacements: {
          name: name,
          sex: sex,
          breed: breed
        }
      })
      .then(result => {
        connection.query(query3,
        {
          type: connection.QueryTypes.INSERT,
          replacements: {
            pid: pid,
            name: name
          }
        })
        .then(result => {
          // result[1] is the number of rows changed
          res.send('/lost')
        })
      })
    })
    .catch( error => {
      console.log("encountered an error")
      console.log(error)});
})

export default router
