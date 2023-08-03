const express = require('express')
const app = express()
const port = 3000

mongoDB_URI='mongodb+srv://daliabdeljalil:l32PEO1heaW4IAOz@cluster0.67bhezc.mongodb.net/books'


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

