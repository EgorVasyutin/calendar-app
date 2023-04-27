const express = require('express')
const dotenv = require('dotenv')
const serverless = require('serverless-http')

dotenv.config()

const userRouter = require('../src/modules/users/user.routes')
const todoRouter = require('../src/modules/todos/todo.routes')

const app = express()


app
  .use('/api_calendar', userRouter)
  .use('/api_calendar/todos', todoRouter)

module.exports.handler = serverless(app)


