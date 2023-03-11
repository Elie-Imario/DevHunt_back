const db = require("../../../models/index")
  
module.exports = (app) => {
  app.get('/api/question/:id', (req, res) => {
    db.question.findByPk(req.params.id)
    .then(questions => {
        if(questions === null) {
            const message = `La question demandé n'existe pas. Réessayez avec un autre identifiant.🥺 `
            return res.status(400).json({message})
        }
        else {
            const message = 'La question a bien été récupérée.🥰😊 '
            return res.json({message: message, data: questions})
        }
    })
    .catch(error => {
        const message = `La question n\'a été trouvé. Réessayez dans quelques instants.😰 `
        res.status(500).json({message: message, data: error})
    })
  })
}