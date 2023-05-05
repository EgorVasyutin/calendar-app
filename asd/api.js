const express = require('express')
const serverless = require('serverless-http')

const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('../src/modules/users/user.routes')
const todoRouter = require('../src/modules/todos/todo.routes')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorMiddleware = require("../src/middlewares/error.middleware");

const app = express()



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

const router = express.Router()


router.get('/', (req, res) => {
  res.send("lol send is working")
})

app.use('/.netlify/functions/api/', router)

module.exports.handler = serverless(app)




