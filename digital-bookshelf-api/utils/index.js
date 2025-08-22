const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const STATIC_ROOT = path.resolve(__dirname, "../public")

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

module.exports = { STATIC_ROOT, MONGO_URI, PORT }
