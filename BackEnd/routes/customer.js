const router = require("express").Router();
const bodyParser = require('body-parser');
const PDFDocument = require("pdfkit");
let customer = require("../Models/customer");
const nodemailer = require('nodemailer');


// Route for customer login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const customerData = await customer.findOne({ email });

        if (!customerData) {
            return res.status(404).send({ error: "Customer not found" });
        }

        if (password === customerData.password) {
            res.status(200).send({ message: "Login successful" });
        } else {
            res.status(401).send({ error: "Incorrect password" });
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});

// Route to generate and send PDF report
router.get("/report", async (req, res) => {
    try {
        // Fetch all customers from the database
        const customers = await customer.find();

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as response

        // Set document metadata
        doc.info.Title = "Customer Report";
        doc.info.Author = "Your Company";

        // Add content to the PDF
        doc.fontSize(25).text("Customer Report", { align: "center" }).moveDown();
        doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(); // Include current date
        doc.moveDown(); // Add some space

        // Add customer details
        customers.forEach((customer, index) => {
            doc.fontSize(20).font('Helvetica-Bold').text(`Customer ${index + 1}`, { underline: true }).moveDown();
            doc.fontSize(15).font('Helvetica').text(`First Name: ${customer.firstName}`);
            doc.fontSize(15).text(`Last Name: ${customer.lastName}`);
            doc.fontSize(15).text(`Email: ${customer.email}`);
            doc.fontSize(15).text(`Contact Number: ${customer.phone}`);
            doc.fontSize(15).text(`Address: ${customer.address}`);
            doc.moveDown();
        });

        // Finalize the PDF
        doc.end();
    } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Fetch all customers
router.route("/").get(async (req, res) => {
    try {
        const customers = await customer.find();
        res.status(200).send(customers);
    } catch (err) {
        console.error("Error fetching customers:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});


//add new customer
router.route("/add").post(async (req, res) => {
    console.log(req.body); // Log request body

    const { firstName, lastName, email, phone, address, password } = req.body;

    // Check if any required fields are missing
    if (!firstName || !lastName || !email || !phone || !address || !password) {
        return res.status(400).json({ error: "Please fill all fields" });
    }

    const newCustomer = new customer({
        firstName,
        lastName,
        email,
        phone,
        address,
        password
    });

    try {
        await newCustomer.save();

        // Send email notification
        const transporter = nodemailer.createTransport({
            // Configure your email service provider here
            // Example for using Gmail:
            service: 'gmail',
            auth: {
                user: 'anantaradhigu5@gmail.com', 
                pass: 'obqnlfsmmlgnbmpy' 
            }
        });

        const mailOptions = {
            from: 'dhiguanantara2024@gmail.com',
            to: email,
            subject: 'Registration Successful',
            html: `
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            Dear ${firstName},
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            Thank you for choosing Anantara Dhigu! Your account has been successfully created.
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            Get ready to embark on an unforgettable journey with us. Explore our luxurious accommodations, exquisite dining options, and exclusive amenities.
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            Should you need any assistance or recommendations during your stay, our dedicated team is here to ensure your experience is nothing short of exceptional.
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            We look forward to welcoming you to Anantara Dhigu and creating memories that will last a lifetime.
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            Warm regards,<br>
            The Anantara Dhigu Team
        </p>
    `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.json("Customer added successfully");
        console.log("Customer added");
    } catch (err) {
        console.error("Failed to add customer:", err);
        res.status(500).json({ error: 'Failed to add customer', message: err.message });
    }
});



//update customer

router.route("/update/:id").put((req, res) => {

    let customerId = req.params.id.trim();

    const {
        firstName,
        lastName,
        email,
        phone,
        address,
        password
    } = req.body;

    const updateCustomer = {
        firstName,
        lastName,
        email,
        phone,
        address,
        password
    }

    customer.findByIdAndUpdate(customerId, updateCustomer, { new: true }).then((updateCustomer) => {
        if (!updateCustomer) {
            return res.status(404).send({ status: "customer not founded" });

        }
        res.status(200).send({ status: "customer updated", updateCustomer });
        console.log("customer updated");
    }).catch((err) => {
        console.log("customer not updated", err);
        res.status(500).send({ status: "customer not updated", error: err.message });
    })

});

//delete customer
router.delete("/delete/:id", async (req, res) => {
    try {
        const customerId = req.params.id.trim();
        const deletedCustomer = await customer.findByIdAndDelete(customerId);
        if (!deletedCustomer) {
            return res.status(404).send({ error: "Customer not found" });
        }
        res.status(200).send({ status: "Customer deleted", deletedCustomer });
    } catch (err) {
        console.error("Error deleting customer:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});


//search customer
router.route("/get/:id").get(async (req, res) => {
    let customerId = req.params.id.trim();

    const Customer = await customer.findById(customerId).then((customer) => {
        res.status(200).send({ status: "customer fetch", customer });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with find", error: err.message });
    });
});

router.route("/getemail/:email").get(async (req, res) => {
    let customerEmail = req.params.email.trim();

    const Customer = await customer.findOne({ email: customerEmail }).then((customer) => {
        if (!customer) {
            return res.status(404).send({ status: "Customer not found" });
        }
        res.status(200).send({ status: "Customer fetch", customer });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with find", error: err.message });
    });
});

module.exports = router;