const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://root:example@mongodb:27017/wanderlust?authSource=admin');

}  

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:"65770e926b685a8efe72e225"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
