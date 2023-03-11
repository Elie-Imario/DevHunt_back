const db = require("../../../models/index")

module.exports = (app) => {
    app.put('/api/responses/:id',(req, res) => {
      const id = req.params.id
      db.response.update(req.body, {
        where: { id: id }
      })
      .then(_ => {
        return db.response.findByPk(id)
        .then(response => {
            if(response === null) {
                const message = `La réponse demandé n'existe pas. Réessayez avec un autre identifiant.🥺 `
                res.status(404).json({message})
            }
            else {
                const message = `La réponse ${response.contentResponse} a bien été modifié.😜 `
                res.json({message, data: response })
            }
        })
      })
      .catch(error => {
        const message = `La réponse n\'a pas pu être modifié. Réessayez dans quelques instants.😰 `
        res.status(500).json({message: message, data: error})
      })
    })
}