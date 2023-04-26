const express = require('express')
const dotenv = require('dotenv')
const serverless = require('serverless-http')

dotenv.config()

const userRouter = require('./modules/users/user.routes.js')
const todoRouter = require('./modules/todos/todo.routes.js')

const app = express()


app
  .use('/api_calendar', userRouter)
  .use('/api_calendar/todos', todoRouter)

module.exports.handler = serverless(app)


