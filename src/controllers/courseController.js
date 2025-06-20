const Course = require('../models/course');

exports.createCourse = async (req, res) => {
    const { title, courseId, description, prerequisites } = req.body;

    try {
        const existingPrereq = await Course.find({ courseId: { $in: prerequisites } }).select("courseId");
        const foundIds = existingPrereq.map(c => c.courseId);
        const invalidPrereq = prerequisites.filter(p => !foundIds.includes(p));

        if (invalidPrereq.length > 0) {
            return res.status(400).json({ error: `Invalid prerequisites are: ${invalidPrereq.join(", ")}` });
        }

        const newCourse = new Course({ title, courseId, description, prerequisites });
        await newCourse.save();
        res.status(201).json(newCourse);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().lean();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findOne({ courseId: req.params.id }).lean();
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const courseToDelete = req.params.id;
        const dependantCourse = await Course.find({ prerequisites: courseToDelete });

        if (dependantCourse.length > 0) {
            return res.status(400).json({ error: `Cannot delete prerequisite for: ${dependantCourse.map(c => c.courseId).join(", ")}` });
        }

        const result = await Course.findOneAndDelete({ courseId: courseToDelete });
        if (!result) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.json({ message: `Course deleted successfully` });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
