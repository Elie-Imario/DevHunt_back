module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        memberSince: {
            type: Sequelize.DATE
        },
        birthday: {
            type: Sequelize.DATE
        },
        password: {
            type: Sequelize.STRING
        },
        reputation: {
            type: Sequelize.STRING
        }
    });

    return User;
};