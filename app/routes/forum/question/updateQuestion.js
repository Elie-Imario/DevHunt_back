const db = require("../../../models/index")

module.exports = (app) => {
    app.put('/api/questions/:id',(req, res) => {
      const id = req.params.id
      db.question.update(req.body, {
        where: { id: id }
      })
      .then(_ => {
        return db.question.findByPk(id)
        .then(question => {
            if(question === null) {
                const message = `La question demandé n'existe pas. Réessayez avec un autre identifiant.🥺 `
                res.status(404).json({message})
            }
            else {
                const message = `La question ${question.contentQuestion} a bien été modifié.😜 `
                res.json({message, data: question })
            }
        })
      })
      .catch(error => {
        const message = `La question n\'a pas pu être modifié. Réessayez dans quelques instants.😰 `
        res.status(500).json({message: message, data: error})
      })
    })
}