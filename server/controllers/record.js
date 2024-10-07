const Record = require('../models/Record');

exports.postRecord = async(req, res) => {
    try {
        const newRecord = new Record(req.body);
        await newRecord.save();
        console.log("New record successfully");
        res.status(201).json({ message: "Record created successfully" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to create record", details: err });
    }
}