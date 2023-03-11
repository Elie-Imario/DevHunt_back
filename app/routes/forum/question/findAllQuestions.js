const db = require("../../../models/index")

module.exports = (app) => {
    app.get('/api/questions',(req, res) => {
            db.question.findAll({
                include: [{
                    model: db.user
                },{
                    model: db.response
                }]
            })
            .then(questions => {
                const message = 'La liste des questions a bien été récupérée.🥰😊 '
                return res.json({message: message, data: questions})
            })
            .catch(error => {
                const message = `La liste des questions n'a pas pu être récuperée. Réessayez dans quelques instants.😰 `
                return res.status(500).json({message: message, data: error})
            })
    })
}