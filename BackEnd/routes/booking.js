const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const PDFDocument = require("pdfkit");
let Booking = require("../Models/booking");

// Route to generate and send PDF report
router.get("/report", async (req, res) => {
    try {
        // Fetch all bookings from the database
        const bookings = await Booking.find();

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as response

        // Set document metadata
        doc.info.Title = "Booking Report";
        doc.info.Author = "Anatara Dhigu";

        // Add content to the PDF
        doc.fontSize(25).text("Booking Report", { align: "center" }).moveDown();
        doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(); // Include current date
        doc.moveDown(); // Add some space

        // Add booking details
        bookings.forEach((booking, index) => {
            doc.fontSize(20).font('Helvetica-Bold').text(`Booking ${index + 1}`, { underline: true }).moveDown();
            doc.fontSize(15).font('Helvetica').text(`Room No: ${booking.roomNo}`);
            doc.fontSize(15).text(`Customer Name: ${booking.cName}`);
            doc.fontSize(15).text(`Customer Email: ${booking.cEmail}`);
            doc.fontSize(15).text(`Check-in: ${booking.checkIn}`);
            doc.fontSize(15).text(`Check-out: ${booking.checkOut}`);
            doc.fontSize(15).text(`Special Request: ${booking.sReq || 'N/A'}`); // Show "N/A" if special request is not provided
            doc.moveDown();
        });

        // Finalize the PDF
        doc.end();
    } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Create a new booking

const sendEmail = async (booking) => {
    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anantaradhigu5@gmail.com', 
            pass: 'obqnlfsmmlgnbmpy' 
        }
    });

    // Email content
    let mailOptions = {
        from: 'dhiguanantara2024@gmail.com',
        to: booking.cEmail,
        subject: 'Booking Confirmation',
        text: `Your booking has been confirmed. Room Number: ${booking.roomNo}, Check-in: ${booking.checkIn}, Check-out: ${booking.checkOut}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
};

router.post('/add', async (req, res) => {
    try {
        const { roomId,
            roomNo,
            customerId,
            cEmail,
            cName,
            checkIn,
            checkOut,
            sReq,
            boookTime } = req.body;
            
        const newBooking = new Booking({
            roomId,
            roomNo,
            customerId,
            cEmail,
            cName,
            checkIn,
            checkOut,
            sReq,
            boookTime
        });
        const savedBooking = await newBooking.save();
        await sendEmail(savedBooking);
        res.status(201).json(savedBooking);
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get a single booking by ID
router.get('/update/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json(booking);
    } catch (error) {
        console.error("Error fetching booking:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update a booking by ID
router.put('/update/:id', async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete a booking by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        console.error("Error deleting booking:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Define a new route to get bookings by customer ID
router.get('/getcid/:cId', async (req, res) => {
    try {
        const customerId = req.params.cId;
        const bookings = await Booking.find({ customerId: customerId });

        if (bookings.length === 0) {
            return res.status(404).json({ error: "Bookings not found for this customer" });
        }

        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings by customer ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
