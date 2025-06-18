const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    courseId:{
        type: String,
        required: true,
        unique: true
    },
    description: String,
    prerequisites:[{
        type: String,
        ref: "Course"
    }]
});

module.exports = mongoose.Schema("Course", courseSchema);
