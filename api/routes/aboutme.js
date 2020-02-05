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

// router.post("/insertpersonal", (req, res, next) => {

//   const sql = ``;

//   connection.query(sql, (err) => {
//     res.redirect('/admin')
//   });
// })

module.exports = router;
