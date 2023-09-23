const express = require('express') 
const ControllerCalculadora = require('../controllers/avaliacao')

const controller = new ControllerCalculadora()
const router = express.Router()

router.get('/api/avaliacao', (req, res) => {
    res.status(200).json({
        message : "Somar, Sub"
    })
})
router.post('/api/avaliacao/somar', controller.Somar)
router.post('/api/avaliacao/subtrair', controller.Subtrair)
router.post('/api/avaliacao/multiplicar', controller.Multiplicar)
router.post('/api/avaliacao/dividir', controller.Dividir)
router.post('/api/avaliacao/potencia', controller.Potencia)
router.post('/api/avaliacao/raiz', controller.Raiz)

module.exports = router