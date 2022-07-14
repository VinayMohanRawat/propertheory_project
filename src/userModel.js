const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true
    },
    designation: {
        type: String,
        trim: true
    },
    companyName: {
        type: String,
        trim: true
    },
    contactNumber: {
        type: Number
    },
    emailId: {
        type: String,
        trim: true
    },
    websiteUrl: {
        type: String
    },
    socialUrl: {
        type: [String]
    },
    companyLogo: {
        type: String
    }
},
    { timestamps: true }) ;

    module.exports = new mongoose.model("user",userSchema);

    /*
    {
    "name": "v",
    "designation": "berojgar",
    "companyName": "berojgar.com",
    "contactNumber": 9090909090,
    "emailId": "berojgar@gmail.com",
    "websiteUrl": "berojgaribatta.com",
    "socialUrl": ["www.facebook.com","www.google.com"],
    "companyLogo": "b.url"
}
*/