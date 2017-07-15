const Sequelize = require('sequelize');
const database = require('./database');

const User = database.define('users', {
     id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
     },
     email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
     },
     password: {
          type: Sequelize.STRING,
          allowNull: false
     }
}, {timestamps: true});

const Consumer = database.define('consumers', {
     id: {
          type: Sequelize.INTEGER,
          unique: true,
          primaryKey: true,
          references: {
               model: 'users',
               key: 'id'
          },
          allowNull: false
     },
     name: {
          type: Sequelize.STRING,
          allowNull: false
     },
     avatar: {
          type: Sequelize.STRING,
          allowNull: false
     }
}, {timestamps: true});

const Vendor = database.define('vendors', {
     id: {
          type: Sequelize.INTEGER,
          unique: true,
          primaryKey: true,
          references: {
               model: 'users',
               key: 'id'
          },
          allowNull: false
     },
     name: {
          type: Sequelize.STRING,
          allowNull: false
     },
     type: {
          type: Sequelize.STRING,
          allowNull: false
     },
     avatar: {
          type: Sequelize.STRING,
          allowNull: false
     }
}, {timestamps: true});

const Barcodes = database.define('barcodes', {
     id: {
          type: Sequelize.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
          references: {
               model: 'users',
               key: 'id'
          },
          allowNull: false
     },
     vendor_id: {
          type: Sequelize.INTEGER,
          references: {
               model: 'vendors',
               key: 'id'
          },
          allowNull: false
     },
     amount: {
          type: Sequelize.INTEGER,
          references: {
               model: 'vendors',
               key: 'id'
          },
          allowNull: false
     }
}, {timestamps: true});


database.sync();

module.exports.User = User;
module.exports.Consumer = Consumer;
module.exports.Vendor = Vendor;
module.exports.Barcodes = Barcodes;
