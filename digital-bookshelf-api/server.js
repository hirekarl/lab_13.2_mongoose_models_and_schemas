require("dotenv").config()
const PORT = process.env.PORT

const express = require("express")
const app = express()

const bookRoutes = require("./routes/bookRoutes")
const connect = require("./db/connection")

app.use(express.json())
app.use("/api/books", bookRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}.`)
})

connect()
