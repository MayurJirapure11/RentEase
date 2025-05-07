const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        set: (v) => {
            if (typeof v === "object" && v?.url) {
                return v.url; // if image is an object, return its URL
            }
            if (v === "") {
                return "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60";
            }
            return v;
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;