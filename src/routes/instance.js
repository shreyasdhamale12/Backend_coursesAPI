const express = require('express');
const router = express.Router();
const controller = require("../controllers/instanceController");

router.post('/', controller.createInstance);
router.get('/:year/:semester', controller.getInstanceByYearSemester);
router.get('/:year/:semester/:courseId', controller.getInstanceDetails);
router.delete('/:year/:semester/:courseId', controller.deleteInstance);

module.exports = router;