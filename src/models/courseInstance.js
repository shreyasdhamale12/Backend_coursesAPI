const mongoose = require('mongoose');

const courseInstanceSchema = new mongoose.Schema({
    year:{
        type: Number,
        required: true
    },
    semester:{
        type: Number,
        required: true
    },
    courseId:[{
        type: Number,
        required: true,
        ref: "Course"
    }]
});

module.exports = mongoose.Schema("CourseInstance", courseInstanceSchema);
