const mongoose = require("mongoose");

const ComSchema = new mongoose.Schema (
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

const completed = mongoose.model("Completed", ComSchema);

module.exports = completed ;