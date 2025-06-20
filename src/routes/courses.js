const express = require('express');
const router = express.Router();
const controller = require("../controllers/courseController");

router.post("/",controller.createCourse);
router.get("/",controller.getAllCourses);
router.get("/:id",controller.getCourseById);
router.delete("/:id",controller.deleteCourse);

module.exports = router;
