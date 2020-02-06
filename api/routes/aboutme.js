const express = require("express");
const router = express.Router();
const db = require("../db");
const bodyParser = require("body-parser");
const connection = db.connect();


router.use(bodyParser.urlencoded({ extended: true }))

router.get("/", (req, res, next) => { next(); }, (req, res) => {

  connection.query(
    "SELECT * FROM portfolio.aboutme",
    function (error, allegegevens) {
      if (error) {
        res.status(400).json({
          status: false,
          message: error.message
        })
      }
      else {
        res.status(200).json({
          status: true,
          aboutme: allegegevens,
          message: "Successfully received information",
        })
      }
    }
  )
})

router.post("/updatepersonal", (req, res, next) => {

  const sql = `UPDATE portfolio.aboutme SET info='${req.body.info}', name='${req.body.name}', phone='${req.body.phone}', birthday='${req.body.birthday}', 
  email='${req.body.email}', location='${req.body.location}' WHERE id='${req.body.id}'`

  connection.query(sql, (err) => {
    if(err) {
      res.status(400).json({
        status: false,
        message: err.message
      })
    } else {
      res.status(200).json({
        status: true,
        message: 'Alle gegevens zijn geüpdated'
      })
    }
    
  });
})

module.exports = router;
