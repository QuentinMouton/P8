const express = require("express")
const cors = require('./middleware/cors.middleware')
const mailRoutes = require("./routes/mail")
const app = express()

//Permet les requêtes cross-origin depuis n'importe quel domaine
app.use(cors)
app.use(express.json())
app.use(mailRoutes)

module.exports = app
