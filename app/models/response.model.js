module.exports = (sequelize, Sequelize) => {
    return sequelize.define('response', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contentResponse: {
        type: Sequelize.STRING
      }
    })
}