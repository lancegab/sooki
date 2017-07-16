const Sequelize = require('sequelize');
const database = require('./database');

const User = database.define('users', {
     id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
     },
     username: {
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

const Points = database.define('points', {
     points: {
          type: Sequelize.INTEGER,
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
     consumer_id: {
          type: Sequelize.INTEGER,
          references: {
               model: 'consumers',
               key: 'id'
          },
          allowNull: false
     }
}, {timestamps: true});
const Promotions = database.define('promotions', {
     id: {
          type: Sequelize.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
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
     content: {
          type: Sequelize.STRING,
          allowNull: false
     },
}, {timestamps: true});
const Receivers = database.define('receivers', {
     promotion_id: {
          type: Sequelize.INTEGER,
          references: {
               model: 'promotions',
               key: 'id'
          },
          allowNull: false
     },
     consumer_id: {
          type: Sequelize.INTEGER,
          references: {
               model: 'consumers',
               key: 'id'
          },
          allowNull: false
     }
}, {timestamps: true});

// database.sync();

module.exports.User = User;
module.exports.Consumer = Consumer;
module.exports.Vendor = Vendor;
module.exports.Barcodes = Barcodes;
module.exports.Receivers = Receivers;
module.exports.Points = Points;
module.exports.Promotions = Promotions;
