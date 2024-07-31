const express  = require('express');
const mongoose = require('mongoose');
const Todo = require("./models/todo.model.js");
const todoRoute = require("./routes/todo.route.js");
const inProgressRoute = require("./routes/inprogress.route.js");
const completedRoute = require("./routes/completed.route.js");
const app = express();
const cors = require("cors");


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// routes
app.use("/api/todo", todoRoute);
app.use("/api/inProgress", inProgressRoute);
app.use("/api/completed", completedRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
})

mongoose.connect("mongodb+srv://skyler:skyler123@backenddb.lc5omp8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
    console.log("Connected to database!!")
    app.listen(5000, () => {
        console.log("Server started on port 5000")
   })
})
.catch(() => {
    console.log("Connection failed!!")
})