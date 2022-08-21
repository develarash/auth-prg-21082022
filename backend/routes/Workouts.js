const express = require('express')
const {createworkout,getWorkouts,getworkout,deleleworkout,updataworkout}=require("../controllers/workoutController")
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getworkout)

// POST a new workout
router.post('/', createworkout)

// DELETE a workout
router.delete('/:id', deleleworkout)

// UPDATE a workout
router.patch('/:id', updataworkout)

module.exports = router