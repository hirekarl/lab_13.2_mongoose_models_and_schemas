const { MONGO_URI } = require("../utils/index")

const mongoose = require("mongoose")

const connect = async () => await mongoose.connect(MONGO_URI)

module.exports = connect
