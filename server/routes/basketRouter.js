const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, basketController.getBasket)
router.post('/', authMiddleware, basketController.addToBasket)
router.patch('/', authMiddleware, basketController.deleteFromBasket)
router.delete('/', authMiddleware, basketController.checkout)

module.exports = router

