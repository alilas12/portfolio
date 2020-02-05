const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio"
})

connection.connect(function (error) {
    if (error) throw error
    console.log("Connected to mysql database")
})

module.exports = {
    connect: function () {
        return connection
    }
}