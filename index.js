const express = require('express')
const server = express()

const PORT = 8080

server.listen(PORT, () => {
  console.log('Server listening on PORT: ', PORT)
})

server.get('/', (req, res) => {
  res.send({ day: 'tuesday', date: '06/14/22' })
})