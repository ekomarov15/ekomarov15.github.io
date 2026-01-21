const express = require('express')
const cors = require('cors')
const generateVariant = require('./generateVariant')

const app = express()
app.use(cors())

app.get('/api/variant', (req, res) => {
  res.json(generateVariant())
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})
