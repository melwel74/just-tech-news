const Sequelize = require('sequelize');
require('dotenv').config();
const Sequelize = new Sequelize(process.env.just_tech_news_db, process.env.root, process.env.Sevenfour74,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
module.exports = sequelize;