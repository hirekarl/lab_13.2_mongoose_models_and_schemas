const { connect } = require("./db/connection")

const main = async () => {
  connect()
    .then(() => console.log("Connected to database."))
    .catch((error) => console.error(error))
}

main()
