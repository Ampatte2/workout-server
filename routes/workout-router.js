const express = require("express");
const WorkoutCtrl = require("../controllers/workout-ctrl");
const router = express.Router();


router.post("/register", WorkoutCtrl.register)
router.post("/login", WorkoutCtrl.login);
router.post("/newworkout", WorkoutCtrl.newWorkout)
//my workouts

module.exports = router