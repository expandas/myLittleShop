const {BasketDevice, Device} = require('../models/models')

class BasketController {
  async getBasket(req, res) {
    const basketId = req.user.id //basketId === userId
    const basket = await BasketDevice.findAll(
      {
        where: {basketId},
        include: {model: Device}
      }
    )
    return res.json(basket)
  }

  async addToBasket(req, res) {
    const {deviceId} = req.body
    const basketId = req.user.id //basketId === userId
    const basketDevice = await BasketDevice.create({basketId, deviceId})
    const basket = await BasketDevice.findAll(
      {
        where: {basketId},
        include: {model: Device}
      }
    )
    return res.json(basket)
  }

  async deleteFromBasket(req, res) {
    const {deviceId} = req.body
    const basketId = req.user.id //basketId === userId
    const basketDevice = await BasketDevice.destroy({where: {deviceId}})
    const basket = await BasketDevice.findAll(
      {
        where: {basketId},
        include: {model: Device}
      }
    )
    return res.json(basket)
  }

  async checkout (req, res) {
    const basketId = req.user.id
    const basket = await BasketDevice.destroy({where: {basketId}})
    return res.json(basket)
  }
}

module.exports = new BasketController()