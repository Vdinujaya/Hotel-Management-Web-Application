const router = require("express").Router();
const bodyParser = require('body-parser');
const PDFDocument = require("pdfkit");
let supplier = require("../Models/supplier");


// Route to generate and send PDF report
router.get("/report", async (req, res) => {
    try {
        // Fetch all suppliers from the database
        const suppliers = await supplier.find();

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as response

        // Set document metadata
        doc.info.Title = "Supplier Report";
        doc.info.Author = "Your Company";

        // Add content to the PDF
        doc.fontSize(25).text("Supplier Report", { align: "center" }).moveDown();
        doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(); // Include current date
        doc.moveDown(); // Add some space

        // Add supplier details
        suppliers.forEach((supplier, index) => {
            doc.fontSize(20).font('Helvetica-Bold').text(`Supplier ${index + 1}`, { underline: true }).moveDown();
            doc.fontSize(15).font('Helvetica').text(`Name: ${supplier.name}`);
            doc.fontSize(15).text(`Contact Person: ${supplier.contactPerson}`);
            doc.fontSize(15).text(`Email: ${supplier.email}`);
            doc.fontSize(15).text(`Contact Number: ${supplier.contactNo}`);
            doc.fontSize(15).text(`Address: ${supplier.address}`);
            doc.moveDown();
        });

        // Finalize the PDF
        doc.end();
    } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


//add new supplier
router.route("/add").post((req, res) => {

    const {
        name,
        contactPerson,
        email,
        contactNo,
        address
    } = req.body;

    const newSupplier = new supplier({
        name,
        contactPerson,
        email,
        contactNo,
        address
    })

    newSupplier.save().then(() => {
        res.json("supplier add successfully");
        console.log("supplier add");
    }).catch((err) => {
        res.status(500).json("can't add supplier");
        console.log("can't add supplier", err);
    })

});

//all supplier
router.route("/").get((req, res) => {
    // Fetching all customer from the database
    supplier.find().then((supplier) => {
        res.json(supplier)
    }).catch((err) => {
        console.log(err);
    })
});

//update supplier

router.route("/update/:id").put((req, res) => {

    let supplierId = req.params.id.trim();

    const {
        name,
        contactPerson,
        email,
        contactNo,
        address
    } = req.body;

    const updatesupplier = {
        name,
        contactPerson,
        email,
        contactNo,
        address
    }

    supplier.findByIdAndUpdate(supplierId, updatesupplier, { new: true }).then((updatesupplier) => {
        if (!updatesupplier) {
            return res.status(404).send({ status: "supplier not founded" });
        }
        res.status(200).send({ status: "supplier updated", updatesupplier });
        console.log("supplier updated");
    }).catch((err) => {
        console.log("supplier not updated", err);
        res.status(500).send({ status: "supplier not updated", error: err.message });
    })

});

//delete supplier
router.delete("/delete/:id", async (req, res) => {
    try {
        const supplierId = req.params.id.trim();
        const deletedSupplier = await supplier.findByIdAndDelete(supplierId);
        if (!deletedSupplier) {
            return res.status(404).send({ error: "supplier not found" });
        }
        res.status(200).send({ status: "supplier deleted", deletedSupplier });
    } catch (err) {
        console.error("Error deleting supplier:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});

//search supplier
router.route("/get/:id").get(async (req, res) => {
    let supplierId = req.params.id.trim();

    const Supplier = await supplier.findById(supplierId).then((supplier) => {
        res.status(200).send({ status: "event fetch", supplier });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with find", error: err.message });
    });
});

module.exports = router;