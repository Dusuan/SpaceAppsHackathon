//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


//app
const app = express();

//db
mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB connected')).catch(err => console.log(err));

//middleware
app.use(morgan('dev'));
app.use(cors({origin: true, credenttials: true}));


//router
const testRouter = require('./routes/test');
app.use('/', testRouter);

//port
const port = process.env.PORT || 8000;

//listener
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})