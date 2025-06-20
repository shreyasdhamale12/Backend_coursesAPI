const Course = require('../models/course');
const courseInstance = require('../models/courseInstance');
const CourseInstance = require('../models/courseInstance');

exports.createInstance = async (req, res) => {
    const {year, semester, courseId} = req.body;

    const course = await Course.findOne({courseId});
    if(!course){
        res.status(404).json({error: "Course not found"})
    }
    const instance = new CourseInstance({year, semester, courseId});
    await instance.save(); 
    res.status(201).json(instance);
}

exports.getInstanceByYearSemester = async (req, res) => {
    const {year, semester} = req.params;
    const instances = await CourseInstance.find({year, semester}).lean();
    res.json(instances);
}

exports.getInstanceDetails = async (req, res) => {
    const {year, semester, courseId} = req.params;
    const instance = await CourseInstance.findOne({year, semester, courseId});
    if(!instance){
        return res.status(404).json({message:"Instance Not found"});
    }
    res.json(instance);
}

exports.deleteInstance = async (req, res) => {
    const {year, semester, courseId} = req.params;
    const result = await courseInstance.findOneAndDelete({year, semester, courseId});
    if(!result){
        return res.status(404).json({error: "Instance not Found while deleting"})
    }
    res.json({message: "Instance Deleted"});
}
