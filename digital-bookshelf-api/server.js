const express = require("express")

const bookRoutes = require("./routes/bookRoutes")
const connect = require("./db/connection")

const { STATIC_ROOT, PORT } = require("./utils")

const app = express()

app.use(express.json())
app.use(express.static(STATIC_ROOT))

app.use("/api/books", bookRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}.`)
})

connect()
