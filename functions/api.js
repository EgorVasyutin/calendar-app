const express = require('express')
// const cors = require('cors')
// const dotenv = require('dotenv')
// const cookieParser = require('cookie-parser')
// const errorMiddleware = require('./middlewares/error.middleware');
const serverless = require('serverless-http')
//
// dotenv.config()
//
// const userRouter = require('./modules/users/user.routes')
// const todoRouter = require('./modules/todos/todo.routes')
//
// const app = express()
//
//
// app
//   .use(express.json())
//   .use(cookieParser())
//   .use(cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL
//   }))
//   .use('/api_calendar', userRouter)
//   .use('/api_calendar/todos', todoRouter)
//   .use(errorMiddleware)

const app = express()

app.get('/', (req, res) => {
  return {
    'path': 'Home',
    'firstName': 'Egor',
    'lastName': 'Vas'

  }
})

app.get('/json', (req, res) => {
  return {
    'path': 'json',
    'author': 'Egor'

  }
})

module.exports.handler = serverless(app)


