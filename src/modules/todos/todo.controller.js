
const todoService = require('./todo.service')

class TodoController {
  async createCard(req, res, next){
    try {
      const { title ,isDone, priority, status, type, startDate, endDate} = req.body
      const newCard = todoService.create(title, isDone, priority, status, type,startDate, endDate, req.user.id)

      return res.status(201).json(newCard)
    } catch (e) {
      next(e)
    }
  }

  async getOneCard(req, res, next) {
    try {
      const card = await todoService.getOne(req.params.id)
      return res.status(200).json(card)


    } catch (e) {
      next(e)
    }
  }

  async getCards(req, res, next) {
    try {
      const cards = await todoService.getAll(req.user.id)
      return res.status(200).json(cards)

    } catch (e) {
      next(e)
    }

  }

  async updateTodo(req, res, next) {
    const { title, isDone, priority, type, startDate, endDate,} = req.body
    try {
      const cards = await todoService.update(title, isDone, priority, type, startDate, endDate, req.params.id)

      return res.status(200).json(cards)
    } catch (e) {
      next(e)
    }
  }

  async patch(req, res, next) {
    try {
      const cards = await todoService.patch( req.body, req.params.id)

      return res.status(200).json(cards)
    } catch (e) {
      next(e)
    }
  }

  async deleteTodo(req, res, next){
    try {
      const cards = await todoService.delete(req.params.id)

      return res.status(200).json(cards)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new TodoController()
