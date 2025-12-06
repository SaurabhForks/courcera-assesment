const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler"); // Simple middleware for handling exceptions inside async express routes

// --- MODEL DEFINITION (Usually in models/Goal.js) ---
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  },
);

const Goal = mongoose.model("Goal", goalSchema);

// --- CRUD OPERATIONS ---

// @desc    Get all goals
// @route   GET /api/goals
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
  }),
);

// @desc    Set a goal
// @route   POST /api/goals
// @access  Public
router.post(
  "/",
  asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error("Please add a text field"); // This will be caught by our error middleware
    }

    const goal = await Goal.create({
      text: req.body.text,
    });

    res.status(200).json(goal);
  }),
);

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Public
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(404);
      throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated object, not the old one
    });

    res.status(200).json(updatedGoal);
  }),
);

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Public
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(404);
      throw new Error("Goal not found");
    }

    await goal.deleteOne();

    res.status(200).json({ id: req.params.id });
  }),
);

module.exports = router;
