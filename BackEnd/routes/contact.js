const express = require('express');
const router = express.Router();
const Contact = require('../Models/contact');

router.post('/add', async (req, res) => {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    });
    try {
      const newContact = await contact.save();
      res.status(201).json(newContact);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Get all contacts
router.get('/', async (req, res) => {
  try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
  } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a contact by ID
router.delete('/delete/:id', async (req, res) => {
  try {
      const deletedContact = await Contact.findByIdAndDelete(req.params.id);
      if (!deletedContact) {
          return res.status(404).json({ error: "Contact not found" });
      }
      res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

// Get specific contact by ID
router.route("/update/:id").get(async (req, res) => {
  try {
      const foundContact = await Contact.findById(req.params.id);
      if (!foundContact) {
          return res.status(404).json({ error: "Contact not found" });
      }
      res.status(200).json(foundContact);
  } catch (err) {
      console.error("Error finding contact:", err);
      res.status(500).json({ error: "Internal server error" });
  }
});

//update contact

router.route("/update/:id").put((req, res) => {

  let contactId = req.params.id.trim();

  const {
      name,
      email,
      subject,
      message
  } = req.body;

  const updatecontact = {
      name,
      email,
      subject,
      message
  }

  Contact.findByIdAndUpdate(contactId, updatecontact, { new: true }).then((updatecontact) => {
      if (!updatecontact) {
          return res.status(404).send({ status: "contact not founded" });
      }
      res.status(200).send({ status: "contact updated", updatecontact });
      console.log("contact updated");
  }).catch((err) => {
      console.log("contact not updated", err);
      res.status(500).send({ status: "contact not updated", error: err.message });
  })

});

  
  module.exports = router;