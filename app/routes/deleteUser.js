const db = require('../models/index')
  
module.exports = (app) => {
  app.delete('/api/users/:id', (req, res) => {
    db.user.findByPk(req.params.id)
    .then(user => {
        if(user === null) {
            const message = `L'utilisateur demandé n'existe pas. Réessayez avec un autre identifiant.`
            return res.status(400).json({message})
        }
        else {
            const userDeleted = user;
            return user.destroy({
                where: { id: user.id }
            })
            .then(_ => {
                const message = `L'utilisateur avec l'identifiant n°${userDeleted.id} a bien été supprimé. `
                res.json({message, data: userDeleted })
            })
        }
    })
    .catch(error => {
        const message = `L'utilisateur n\'a pas pu être supprimé. Réessayez dans quelques instants. `
        res.status(500).json({message: message, data: error})
    })
  })
}