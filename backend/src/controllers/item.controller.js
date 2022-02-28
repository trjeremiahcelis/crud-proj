const db = require("../models")
const Items = db.items;
const Order = db.order;
const Op = db.Sequelize.Op;

exports.createItem = (req, res) => {
    Items.create({
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        price: req.body.price
    })
        .then(items => {
            if (req.body.items) {
                Items.findAll({
                    where: {
                        itemName: {
                            [Op.or]: req.body.order
                        }
                    }
                })
                    .then(items => {
                        items.setItems(items)
                            .then(() => {
                                res.send({ message: "Items was successfully created" })
                            })
                    })
                    .catch(err => {
                        res.status(500).send({ message: err.message })
                    })
            }
        })
}

exports.allAcess = (req, res) => {
    res.status(200).send("Public content")
}