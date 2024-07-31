const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"]
        },
    },
    {
        timestamps: true, // Fixed option here
    }
);


const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo ; 
