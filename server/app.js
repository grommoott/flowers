const express = require("express")
const app = express()
const port = process.env.PORT ? process.env.PORT : 7777

app.use(express.static("../dist"))

app.listen(port)