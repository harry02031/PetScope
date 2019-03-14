import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET pets listing. */
router.get('/lost', function (req, res, next) {
  const query = 'SELECT * FROM Pet, Lost WHERE Pet.pid = Lost.pid;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(lost => {
      // console.log(lost)
      res.json(lost)
    })
})

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
  const pid = req.params.pid
  const query = 'SELECT * FROM Pet, Lost WHERE Pet.pid = :pid and Pet.pid = Lost.pid;'
  connection.query(query, 
    { 
      type: connection.QueryTypes.SELECT,
      replacements: {
        pid: pid
      }
    })
    .then(pet => {
      if (pet.length === 1 ) {
        console.log(pet)
        res.json(pet[0])
      } else {
        res.status(404).json({})
      }
    })
    .catch(function(err) {
      console.log(err, null)
    });
})

/* GET pets listing. */
router.get('/lost/add/reward-summary', function (req, res, next) {
  const query = 'SELECT animalType, avg(amount) FROM reward, pet, pettype WHERE Reward.pid = Pet.pid and PetType.breed = Pet.breed GROUP BY animaltype;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(reward => {
      console.log(reward)
      res.json(reward)
    })
})

router.get('/lost/:pid/sightings/all', function (req, res, next) {
  const pid = req.params.pid
  const query = 'SELECT * FROM Sighting WHERE Sighting.pid = :pid;'
  connection.query(query, 
    { 
      type: connection.QueryTypes.SELECT,
      replacements: {
        pid: pid
      }
    })
    .then(sightings => {
      console.log('got sightings')
      console.log(sightings)
      res.json(sightings)
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

router.post('/lost/delete/:pid', bodyParser.json(), function (req, res, next) {
  const pid = req.params.pid
  const query = 'DELETE FROM Lost WHERE pid = :pid;'
  connection.query(query, { 
    type: connection.QueryTypes.DELETE,
    replacements: {
     pid: pid
    }
  })
    .then(lost => {
      console.log(lost)
      res.json(lost)
    })
})

router.post('/lost', bodyParser.json(), function (req, res, next) {
  // const pid = req.body.data.pid
  // 
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
  const species = req.body.data.species
  const breed = req.body.data.breed
  const name = req.body.data.name
  const sex = req.body.data.sex
  const dob = req.body.data.birthDate
  const time = req.body.data.lostTime
  const date = req.body.data.lostDate
  const lat = req.body.data.lostLat
  const long = req.body.data.lostLong
  const reward = req.body.data.reward
  const uid = req.body.data.uid

  console.log('adding lost pet...')

  const query = 'INSERT INTO pettype (breed, animalType) VALUES (:breed, :species) on conflict (breed) do nothing;'
  const query2 = 'INSERT INTO pet (uid, name, sex, breed, birthDate, regDate) VALUES (:uid, :name, :sex, :breed, :dob, CURRENT_DATE) ;'
  const query3 = 'INSERT INTO lost (pid, lostDate, lostTime, lostLat, lostLong) VALUES ((SELECT currval(\'pet_pid_seq\')), :date, :time, :lat, :long) ;'
  const query4 = 'INSERT INTO reward (uid, pid, amount) VALUES (:uid, (SELECT currval(\'pet_pid_seq\')), :reward);'
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
          breed: breed,
          dob: dob,
          uid: uid
        }
      })
      .then(result => {
        connection.query(query3,
        {
          type: connection.QueryTypes.INSERT,
          replacements: {
            name: name,
            date: date,
            time: time,
            lat: lat,
            long: long
          }
        })
        .then(result => {
          connection.query(query4,
            {
              type: connection.QueryTypes.INSERT,
              replacements: {
                reward: reward,
                uid: uid
              }
            }).then (result => {res.send('/lost')})
        })
      })
    })
    .catch( error => {
      console.log("encountered an error")
      console.log(error)});
})

router.get('/lost/:pid/sighting', function (req, res, next) {
  const pid = req.params.pid
  const response = {
    errors: [],
    uid: '',
    pid: pid,
    date: '',
    time: '',
    latitude: '',
    longitude: ''
  }
  res.json( response )
})

router.post('/lost/sighting', bodyParser.json(), function (req, res, next) {
  console.log('got request')
  console.log(req.body.data)
  const uid = req.body.data.uid
  const pid = req.body.data.pid
  const time = req.body.data.time
  const date = req.body.data.date
  const lat = req.body.data.latitude
  const long = req.body.data.longitude
  const desc = req.body.data.description
  const query = 'INSERT INTO sighting (date, time, lat, long, description, pid, uid) VALUES (:date, :time, :lat, :long, :desc, :pid, :uid) ;'
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

export default router
