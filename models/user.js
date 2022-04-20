var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: false
    },
    activeToken: String,
    activeExpires: Date,
    passResetString: String,
    passResetExpires: Number,

    name: String,
    country: String,
    language: String,
    bio: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    recommendations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recommendation"
        }
    ],
    favoriteRecommendations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recommendation"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);