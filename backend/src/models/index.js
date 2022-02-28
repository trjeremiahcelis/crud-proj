const config = require('../config/db.config')
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases:false,
        pool: {
            max: config.max,
            min: config.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const verifyItems = require("../middleware/checkItems")
module.exports = { verifyItems }

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.items = require("./items.model")(sequelize, Sequelize)
db.order = require("./order.model")(sequelize, Sequelize)
db.order.belongsToMany(db.items, {
    through: "item_order",
    foreignKey: "orderId",
    otherKey: "itemId"
});
db.items.belongsToMany(db.order, {
    through: "item_order",
    foreignKey: "itemId",
    otherKey: "orderId"
});
module.exports = db;