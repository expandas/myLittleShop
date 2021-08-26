const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/', deviceController.getAll)
router.post('/', checkRoleMiddleware("ADMIN"), deviceController.create)
router.get('/:id', deviceController.getOne)

module.exports = router