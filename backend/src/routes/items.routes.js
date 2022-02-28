const { checkItems } = require("../middleware")
const controller = require("../controllers/item.controller");
module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
          next();
    });
    app.post("/items/create", [
        checkItems.checkExistingItems,
        checkItems.checkExistingOrders
    ], controller.createItem
    );
};