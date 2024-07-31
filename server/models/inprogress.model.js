const mongoose = require("mongoose");

const ProSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: [true, "Please enter name"]
        },
    },
    {
        timestamps: true,
    }
);

const inProgress = mongoose.model("inProgress", ProSchema);

module.exports = inProgress ; 