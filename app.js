const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('dev-2 ___ express, create namespace'))

app.listen(port, () => console.log(`TEST-dev-2 Example app listening on port ${port}!`))
