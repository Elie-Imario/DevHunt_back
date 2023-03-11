module.exports = (sequelize,Sequelize) => {
    return sequelize.define('question', {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titleQuestion: {
        type:Sequelize.STRING
      },
      contentQuestion: {
        type:Sequelize.STRING,
      },
      ue: {
        type:Sequelize.STRING
      }
    })
}