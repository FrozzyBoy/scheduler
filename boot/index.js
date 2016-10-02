module.exports = function (app) {
    require("./express")(app);
    console.log('express successfull');
    require("./passport")(app);
    console.log('passport express');
};