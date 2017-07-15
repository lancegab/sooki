const Sequelize = require('sequelize');

const connectionUrl = 'postgres://sookiuser:sookipass@localhost:5432/sookidb';

const database = new Sequelize(connectionUrl);

module.exports = database;
