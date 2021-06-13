const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost/letski', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connection is established ')
})

const routes = require('./routes/routes')

app = express()

app.use(cookieParser())
// To exchange the cookies with the front-end
app.use(cors({
    credentials: true,
    origin: ['http://localhost:8080']
}))

app.use(express.json())

app.use('/api', routes)

app.listen(8000)
