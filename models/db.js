const Sequelize = require('sequelize')

// Conexão com banco de dados Mysql
const sequelize = new Sequelize('app_post', 'root', 'biabia2525', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}