const express = require('express')
const cors = require('cors')
const db = require("./models")
const app = express()
let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/* A route that respond with mess of welcome */
app.get("/", (req, res) => {
    res.json({ message: "Welcome to this Inventory API" })
})
/* Set port to lister for request */
const PORT= process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})