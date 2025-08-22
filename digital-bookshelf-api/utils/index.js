const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

module.exports = { MONGO_URI, PORT }
