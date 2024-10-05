const Test = require('../models/Test');

exports.postTest = async(req, res) => {
    try {
        const newTest = new Test(req.body);
        await newTest.save();
        console.log("New test successfully");
        res.status(201).json({ message: "Test created successfully" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to create test", details: err });
    }
}

exports.getTests = async(req, res) => {
    try {
        const tests = await Test.find();
        res.status(200).json({ tests });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to get tests", details: err });
    }
}