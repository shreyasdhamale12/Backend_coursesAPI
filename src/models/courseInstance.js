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
        type: String,
        required: true,
        ref: "Course"
    }]
});

module.exports = mongoose.model("CourseInstance", courseInstanceSchema);
