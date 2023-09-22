const express = require('express') 
const ControllerCalculadora = require('../controllers/avaliacao')

const controller = new ControllerCalculadora()
const router = new express.Router()

router.get('/api/avaliacao', (req, res) => {
    res.status(200).json({
        message : "Retornou todas as operações"
    })
})
router.post('/api/avaliacao', controller.Somar)
router.post('/api/avaliacao', controller.Subtrair)
router.post('/api/avaliacao', controller.Multiplicar)
router.post('/api/avaliacao', controller.Dividir)
router.post('/api/avaliacao', controller.Potencia)
router.post('/api/avaliacao', controller.Raiz)

module.exports = router