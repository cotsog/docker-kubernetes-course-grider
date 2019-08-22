const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient()
client.set('visits', 0)

app.get('/', (req, res) =>
  client.send('visits', (err, visits) => {
    res.send(`Number of visits ${visits}`)
    client.set('visits', parseInt(visits) + 1)
  })
)
app.listen(8082, () => console.log(`Example app listening on port port!`))
