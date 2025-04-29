const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Listing = require("./models/listing")

app.get('/', (req,res) => {
    res.send("Hi, this is root")
})

const MONGO_URL = "mongodb://127.0.0.1:27017/rentease"

main()
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect(MONGO_URL)
}

app.get('/testListing',async (req,res) => {
    let sampleListing = new Listing({
        title: "New Villa",
        description: "By the Beach",
        price: 1200,
        location: "Mumbai",
        country: "India"
    })
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("Testing Successful")
})

app.listen(8080 , () => {
    console.log("Listening to port 8080")
})