const db = require('../models')
const Items = db.items
const Order = db.order
checkExistingItems = (req, res, next) => {
    Items.findOne({
        where: {
            itemName: req.body.itemName
        }
    }).then(items => {
        if (items) {
            res.status(400).send({
                message: "Items is already existing!"
            });
            return;
        }
        next();
    })};
    
checkExistingOrders = (req, res, next) => {
    Order.findOne({
        where: {
            orderedBy: req.body.orderedBy
        }
    }).then(order => {
        if (order) {
            res.status(400).send({
                message: "Items is already existing!"
            });
            return;
        }
    next();
})};

const verifyItems = {
    checkExistingItems: checkExistingItems,
    checkExistingOrders: checkExistingOrders
};
module.exports = verifyItems;