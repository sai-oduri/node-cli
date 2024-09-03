const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
});

module.exports = mongoose.model("Customer", customerSchema);