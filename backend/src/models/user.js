const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        enum: ["consumer", "retailer"],
        default: "consumer",
    },
},{
    timestamps: true,
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',userSchema);
