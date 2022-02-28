module.exports = (sequelize, Sequelize) => {
    const Items = sequelize.define("items", {
        itemName: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
        }
    });
    return Items;
};