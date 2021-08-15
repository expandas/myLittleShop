const {Device, DeviceInfo} = require('../models/models');
const {v4: uuidv4} = require('uuid');
const path = require('path')

class DeviceController {
  async create(req, res, next) {
    try {
      const {typeId, brandId, name, price} = req.body
      const {image} = req.files
      let format = image.name.split('.')
      format = format[format.length - 1]
      const fileName = uuidv4() + '.' + format
      image.mv(path.resolve(__dirname, '..', 'static', fileName))
      const device = await Device.create({name, price, brandId, typeId, image: fileName})
      if (req.body.info) {
        const info = JSON.parse(req.body.info)
        info.forEach(el => {
          DeviceInfo.create({
            title: el.title,
            description: el.description,
            deviceId: device.id
          })
        })
      }
      return res.json(device)
    } catch (e) {
      console.log('***ERROR***', e)
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, currentPage, limit} = req.query
    currentPage = currentPage || 1
    limit = limit || 10
    let offset = currentPage * limit - limit
    let devices
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll()
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({where: {brandId}})
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({where: {typeId}})
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({where: {brandId, typeId}})
    }
    devices.limit = Number(limit)
    devices.offset = offset
    return res.json(devices)
  }

  async getOne(req, res) {
    const {id} = req.params
    const device = await Device.findOne(
      {
        where: {id},
        include: [{model: DeviceInfo, as: 'info'}]
      }
    )
    return res.json(device)
  }
}

module.exports = new DeviceController()


