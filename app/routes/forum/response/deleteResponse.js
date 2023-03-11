const db = require("../../../models/index")
  
module.exports = (app) => {
  app.delete('/api/responses/:id', (req, res) => {
    db.response.findByPk(req.params.id)
    .then(response => {
        if(response === null) {
            const message = `La réponse demandé n'existe pas. Réessayez avec un autre identifiant.🥺 `
            return res.status(400).json({message})
        }
        else {
            const responseDeleted = response;
            return response.destroy({
                where: { id: response.id }
            })
            .then(_ => {
                const message = `La réponse avec l'identifiant n°${responseDeleted.id} a bien été supprimé.😔 `
                res.json({message, data: responseDeleted })
            })
        }
    })
    .catch(error => {
        const message = `La réponse n\'a pas pu être supprimé. Réessayez dans quelques instants.😰 `
        res.status(500).json({message: message, data: error})
    })
  })
}