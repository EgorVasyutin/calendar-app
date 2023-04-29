const express = require('express')
const dotenv = require('dotenv')
const serverless = require('serverless-http')
dotenv.config()
const userRouter = require('../src/modules/users/user.routes')
const todoRouter = require('../src/modules/todos/todo.routes')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorMiddleware = require("../src/middlewares/error.middleware");

const app = express()


// app
//   .use('/api_calendar', userRouter)
//   .use('/api_calendar/todos', todoRouter)

app
  .use(express.json())
  .use(cookieParser())
  .use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
  }))
  .use('/api_calendar', userRouter)
  .use('/api_calendar/todos', todoRouter)
  .use(errorMiddleware)


module.exports.handler = serverless(app)


