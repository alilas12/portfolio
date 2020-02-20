const express = require("express");
const router = express.Router();
const db = require("../db");
const bodyParser = require("body-parser");
const connection = db.connect();


router.use(bodyParser.urlencoded({ extended: true }))

router.get("/", (req, res, next) => { next(); }, (req, res) => {

  connection.query(
    "SELECT * FROM portfolio.galerij",
    function (err, allegegevens) {
      if (err) {
        res.status(400).json({
          status: false,
          message: err.message
        })
      }
      else {
        res.status(200).json({
          status: true,
          galerij: allegegevens,
          message: "Successfully received information",
        })
      }
    }
  )
})

router.post("/insertingallery", (req, res, next) => {

  const sql = `INSERT INTO galerij (image, categorieid) VALUES ('${req.body.image}', '${req.body.categorieid}');`

  connection.query(sql, (err) => {
    if(err) {
      res.status(400).json({
        status: false,
        message: err.message
      })
    } else {
      res.status(200).json({
        status: true,
        message: 'Foto is toegevoegd'
      })
    }
    
  });
})

module.exports = router;
