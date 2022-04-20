var mongoose = require("mongoose");

var cycleSchema = new mongoose.Schema({
    cycleIndex: Number,  //determined by the previous cycle index
    cycleDuration : Number,
    startingTimestamp : Number,
    numberOfRecommendations : Number
});

module.exports = mongoose.model("Cycle", cycleSchema);