const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.sendFile("/views/index.html" )
})

app.get('/about', (req, res) => {
  res.sendFile("./views/about.html" )
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
