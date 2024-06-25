const express = require('express');
const router = express.Router();
const Feedback = require('../Models/Feedback');

// Route to get all feedback
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to submit feedback
router.post('/add', async (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    feedback: req.body.feedback,
    reply: req.body.reply
  });
  try {
    const newFeedback = await feedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a feedback by ID
router.delete('/delete/:id', async (req, res) => {
  try {
      const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
      if (!deletedFeedback) {
          return res.status(404).json({ error: "Feedback not found" });
      }
      res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
      console.error("Error deleting feedback:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

// Get specific feedback by ID
router.route("/update/:id").get(async (req, res) => {
  try {
      const foundFeedback = await Feedback.findById(req.params.id);
      if (!foundFeedback) {
          return res.status(404).json({ error: "Feedback not found" });
      }
      res.status(200).json(foundFeedback);
  } catch (err) {
      console.error("Error finding feedback:", err);
      res.status(500).json({ error: "Internal server error" });
  }
});

//update feedback

router.route("/update/:id").put((req, res) => {

  let feedbackId = req.params.id.trim();

  const {
      name,
      feedback,
      reply
  } = req.body;

  const updatefeedback = {
      name,
      feedback,
      reply
  }

  Feedback.findByIdAndUpdate(feedbackId, updatefeedback, { new: true }).then((updatefeedback) => {
      if (!updatefeedback) {
          return res.status(404).send({ status: "feedback not founded" });
      }
      res.status(200).send({ status: "feedback updated", updatefeedback });
      console.log("feedback updated");
  }).catch((err) => {
      console.log("feedback not updated", err);
      res.status(500).send({ status: "feedback not updated", error: err.message });
  })

});

module.exports = router;