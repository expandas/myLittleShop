const {Brand} = require('../models/models');

class BrandController {
    async create(req,res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)

    }
    async getAll(req,res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }


  async getAll(req, res) {
    const allBrands = await Brand.findAll()
    res.json(allBrands)
  }
}

module.exports = new BrandController()