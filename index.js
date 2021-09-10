const express = require("express")
const app = express()

require("./routes")(app)

app.get("/", (req, res) => {
  res.send("Home page")
})

app.listen(5000, () => {
  console.log("api is up!")
})// done!
