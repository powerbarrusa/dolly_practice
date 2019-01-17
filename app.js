const express = require("express")
const app = express()
const port = 3003
const data = require("./data.json")

app.use(express.static("public"))

app.get("/data", (req, res, next) => {
  res.status(200).send({
    "message": "Success!",
    data: data
  })
})

app.get("/:tag", (req, res, next) => {
  res.status(200).send(req.params.tag)
})

app.listen(port, () => console.log(`Party on port ${port}`))