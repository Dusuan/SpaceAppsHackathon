//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const path = require('path');

//app
const app = express();

//db
mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB connected')).catch(err => console.log(err));

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin: true, credenttials: true}));

app.use(express.static("./client/build"));
app.get("*", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

//router
const recordRouter = require('./routes/record');
app.use('/', recordRouter);

//port
const port = process.env.PORT || 8000;

//listener
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})