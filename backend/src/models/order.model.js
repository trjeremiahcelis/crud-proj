module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
       id: {
           type: Sequelize.INTEGER,
           primaryKey: true
       },
       orderedBy: {
           type: Sequelize.STRING
       }
    });
    return Order;
};