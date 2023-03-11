const db = require("../../../models/index")
  
module.exports = (app) => {
  app.delete('/api/questions/:id', (req, res) => {
    db.question.findByPk(req.params.id)
    .then(question => {
        if(question === null) {
            const message = `La question demandé n'existe pas. Réessayez avec un autre identifiant.🥺 `
            return res.status(400).json({message})
        }
        else {
            const questionDeleted = question;
            return question.destroy({
                where: { id: question.id }
            })
            .then(_ => {
                const message = `La question avec l'identifiant n°${questionDeleted.id} a bien été supprimé.😔 `
                res.json({message, data: questionDeleted })
            })
        }
    })
    .catch(error => {
        const message = `La question n\'a pas pu être supprimé. Réessayez dans quelques instants.😰 `
        res.status(500).json({message: message, data: error})
    })
  })
}