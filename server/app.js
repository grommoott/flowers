const express = require("express")
const app = express()
const port = process.env.PORT ? process.env.PORT : 7777
const cors = require("cors")

app.use(express.static("../dist"))
app.use(cors())

app.listen(7777)