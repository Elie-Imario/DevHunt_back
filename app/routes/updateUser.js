const db = require('../models/index')

module.exports = (app) => {
    app.put('/api/users/:id',(req, res) => {
      const id = req.params.id
      db.user.update(req.body, {
        where: { id: id }
      })
      .then(_ => {
        return db.user.findByPk(id)
        .then(user => {
            if(user === null) {
                const message = `L'utilisateur demandé n'existe pas. Réessayez avec un autre identifiant. `
                res.status(404).json({message})
            }
            else {
                const message = `L'utilisateur ${user.username} a bien été modifié.`
                res.json({message, data: user })
            }
        })
      })
      .catch(error => {
        const message = `L'utilisateur n\'a pas pu être modifié. Réessayez dans quelques instants. `
        res.status(500).json({message: message, data: error})
      })
    })
}