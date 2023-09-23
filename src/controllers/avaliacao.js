const ServicoCalculadora = require ("../services/avaliacao")

const servico = new ServicoCalculadora()

class ControllerCalculadora {
    Somar (req, res) {
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message:`resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }

    Subtrair (req, res) {
        try {
            const result = servico.Subtrair(req.body.num1, req.body.num2)
            res.status(200).json({
                message:`resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }

    Multiplicar (req, res) {
        try {
            const result = servico.Multiplicar(req.body.num1, req.body.num2)
            res.status(200).json({
                message:`resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }

    Dividir (req, res) {
        try {
            const result = servico.Dividir(req.body.num1, req.body.num2)
            res.status(200).json({
                message:`resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }

    Potencia (req, res) {
        try {
            const result = servico.Potencia(req.body.num1, req.body.num2)
            res.status(200).json({
                message:`resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }

    Raiz (req, res) {
        try {
            const result = servico.Raiz(req.body.num1)
            res.status(200).json({
                message:`resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu bão não" })
        }
    }
}

module.exports = ControllerCalculadora