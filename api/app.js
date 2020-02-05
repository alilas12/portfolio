const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const Galerij = require("./routes/galerij")
app.use("/galerij", Galerij)

const Aboutme = require("./routes/aboutme")
app.use("/aboutme", Aboutme)

app.use((req, res, next) => {
  const error = new Error("Nothing found with this request")
  error.status = 404
  next(error)
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    Error: {
      message: error.message
    }
  })
})

module.exports = app
