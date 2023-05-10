const express = require('express')
const app = express()

// //express app to static files and giving file path to where static files are
// //express doesnt load static automaticcally so needs to be explicitely loaded and its not generated
// //by the server
app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log("Listening on Port 4000"))