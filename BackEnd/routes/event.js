const router = require("express").Router();
const bodyParser = require('body-parser');
const PDFDocument = require("pdfkit");
let event = require("../Models/event");

// Route to generate and send PDF report
router.get("/report", async (req, res) => {
    try {
        // Fetch all events from the database
        const events = await event.find();

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as response

        // Set document metadata
        doc.info.Title = "Event Report";
        doc.info.Author = "Your Company";

        // Add content to the PDF
        doc.fontSize(25).text("Event Report", { align: "center" }).moveDown();
        doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(); // Include current date
        doc.moveDown(); // Add some space

        // Add event details
        events.forEach((event, index) => {
            doc.fontSize(20).font('Helvetica-Bold').text(`Event ${index + 1}`, { underline: true }).moveDown();
            doc.fontSize(15).font('Helvetica').text(`Title: ${event.title}`);
            doc.fontSize(15).text(`Start Date: ${event.startDateTime}`);
            doc.fontSize(15).text(`End Date: ${event.endDateTime}`);
            doc.fontSize(15).text(`Location: ${event.location}`);
            doc.fontSize(15).text(`Price: ${event.price}`);
            doc.moveDown();
        });

        // Finalize the PDF
        doc.end();
    } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});



//add new event
router.route("/add").post((req, res) => {

    const {
        title,
        description,
        startDateTime,
        endDateTime,
        location,
        organizer,
        capacity,
        price
    } = req.body;

    const newEvent = new event({
        title,
        description,
        startDateTime,
        endDateTime,
        location,
        organizer,
        capacity,
        price
    })

    newEvent.save().then(() => {
        res.json("event add successfully");
        console.log("event add");
    }).catch((err) => {
        res.status(500).json("can't add event");
        console.log("can't add event", err);
    })

});

//all events
router.route("/").get((req, res) => {
    // Fetching all customer from the database
    event.find().then((event) => {
        res.json(event)
    }).catch((err) => {
        console.log(err);
    })
});

//update event

router.route("/update/:id").put((req, res) => {

    let eventId = req.params.id.trim();

    const {
        title,
        description,
        startDateTime,
        endDateTime,
        location,
        organizer,
        capacity,
        price
    } = req.body;

    const updateEvent = {
        title,
        description,
        startDateTime,
        endDateTime,
        location,
        organizer,
        capacity,
        price
    }

    event.findByIdAndUpdate(eventId, updateEvent, { new: true }).then((updateEvent) => {
        if (!updateEvent) {
            return res.status(404).send({ status: "event not founded" });
        }
        res.status(200).send({ status: "event updated", updateEvent });
        console.log("event updated");
    }).catch((err) => {
        console.log("event not updated", err);
        res.status(500).send({ status: "event not updated", error: err.message });
    })

});

//delete event
router.delete("/delete/:id", async (req, res) => {
    try {
        const eventId = req.params.id.trim();
        const deletedEvent = await event.findByIdAndDelete(eventId);
        if (!deletedEvent) {
            return res.status(404).send({ error: "event not found" });
        }
        res.status(200).send({ status: "event deleted", deletedEvent });
    } catch (err) {
        console.error("Error deleting event:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});

//search event
router.route("/get/:id").get(async (req, res) => {
    let eventId = req.params.id.trim();

    const Event = await event.findById(eventId).then((event) => {
        res.status(200).send({ status: "event fetch", event });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with find", error: err.message });
    });
});

module.exports = router;