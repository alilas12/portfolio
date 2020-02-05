const express = require("express");
const router = express.Router();
const db = require("../db");
const bodyParser = require("body-parser");
const connection = db.connect();


router.use(bodyParser.urlencoded({ extended: true }))

router.get("/", (req, res, next) => { next(); }, (req, res) => {

  connection.query(
    "SELECT * FROM portfolio.galerij",
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
          galerij: allegegevens,
          message: "Successfully received information",
        })
      }
    }
  )
})

module.exports = router;
