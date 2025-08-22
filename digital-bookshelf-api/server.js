const path = require("path")
require("dotenv").config()

const express = require("express")
const bookRoutes = require("./routes/bookRoutes")
const connect = require("./db/connection")

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use("/api/books", bookRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}.`)
})

connect()
