const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const MONGO_URI = process.env.MONGO_URI

const mongoose = require("mongoose")

const connect = async () => await mongoose.connect(MONGO_URI)

module.exports = connect
