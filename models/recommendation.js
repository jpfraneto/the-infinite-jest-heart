var mongoose = require("mongoose");

var recommendationSchema = new mongoose.Schema({
    index : Number,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        country: String,
        name: String,
        language: String
    },
    comments: [{
        author: String,
        date: {type: Date, default: Date.now},
        comment: String
    }],
    name: String,
    reviewed: Boolean,
    type: String,
    recommendationDate: {
        type: String,
        default: Date.now.toString(),
    },
    url: String,
    youtubeID : String,
    description:String,
    language : String,
    status: String,
    duration: Number,
    startingRecommendationTimestamp: Number,
    endingRecommendationTimestamp: Number,
    timestampDifference: Number
});

module.exports = mongoose.model("Recommendation", recommendationSchema);