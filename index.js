const mongoose = require("mongoose");

let db;
(async function () {
    try {
        db = await mongoose.connect("mongodb://localhost:27017/cli-project");
        // console.log("connected");

    } catch (error) {
        console.log("MongoDB connection error");
    }
})();

// import model
const Customer = require("./models/customer.js");

//add customer
const addCustomer = async (customer) => {
    await Customer.create(customer);
    console.log("New Customer Added");
    db.disconnect();
}

// find customer
const findCustomer = async (name) => {
    const search = new RegExp(name, 'i');
    const resp = await Customer.find({ $or: [{ firstname: search }, { lastname: search }] });
    console.log(resp);
    console.log(resp.length + " matches");
    db.disconnect();
}

//update customer
const updateCustomer = async (_id, customer) => {
    await Customer.updateOne({ _id }, customer);
    console.log("Customer Updated");
    db.disconnect();
}

//remove customer
const removeCustomer = async (_id) => {
    await Customer.deleteOne({ _id });
    console.log("Customer Deleted");
    db.disconnect();
}

//list customers
const listCustomers = async () => {
    const data = await Customer.find({});
    console.log(data);
    console.log(data.length + " Customer");
    db.disconnect();
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}
