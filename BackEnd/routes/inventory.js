const router = require("express").Router();
const bodyParser = require('body-parser');
const PDFDocument = require("pdfkit");

let inventory = require("../Models/inventory");

//report

// Route to generate and send PDF report
router.get("/report", async (req, res) => {
    try {
        // Fetch all inventory items from the database
        const inventoryItems = await inventory.find();

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as response

        // Set document metadata
        doc.info.Title = "Inventory Report";
        doc.info.Author = "Your Company";

        // Add content to the PDF
        doc.fontSize(25).text("Inventory Report", { align: "center" }).moveDown();
        doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(); // Include current date
        doc.moveDown(); // Add some space

        // Add inventory item details
        inventoryItems.forEach((item, index) => {
            doc.fontSize(20).font('Helvetica-Bold').text(`Inventory Item ${index + 1}`, { underline: true }).moveDown();
            doc.fontSize(15).font('Helvetica').text(`Item Name: ${item.itemName}`);
            doc.fontSize(15).text(`Quantity: ${item.quantity}`);
            doc.fontSize(15).text(`Price: ${item.price}`);
            doc.fontSize(15).text(`Description: ${item.description}`);
            doc.fontSize(15).text(`Supplier: ${item.supplier}`);
            doc.moveDown();
        });

        // Finalize the PDF
        doc.end();
    } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


//add new inventory
router.route("/add").post((req, res) => {
    console.log(req.body); // Log request body

    const {
        itemName,
        description,
        Quantity,
        price,
        Supplier
    } = req.body;

    const newInventory = new inventory({
        itemName,
        description,
        Quantity,
        price,
        Supplier
    });

    newInventory.save().then(() => {
        res.json("inventory added successfully");
        console.log("inventory added");
    }).catch((err) => {
        res.status(500).json({ message: 'Failed to add inventory', error: err.message });
        console.log("Failed to add inventory");
    });
});

//all invetory
router.route("/").get((req, res) => {
    // Fetching all invetory from the database
    inventory.find().then((inventory) => {
        res.json(inventory)
    }).catch((err) => {
        console.log(err);
    })
});

//update vehicle

router.route("/update/:id").put((req, res) => {

    let inventoryId = req.params.id.trim();

    const {
        itemName,
        description,
        Quantity,
        price,
        Supplier
    } = req.body;

    const updateInventory = {
        itemName,
        description,
        Quantity,
        price,
        Supplier
    }

    inventory.findByIdAndUpdate(inventoryId, updateInventory, { new: true }).then((updateInventory) => {
        if (!updateInventory) {
            return res.status(404).send({ status: "inventory not founded" });

        }
        res.status(200).send({ status: "inventory updated", updateInventory });
        console.log("inventory updated");
    }).catch((err) => {
        console.log("inventory not updated", err);
        res.status(500).send({ status: "inventory not updated", error: err.message });
    })

});

//delete inventory
router.delete("/delete/:id", async (req, res) => {
    try {
        const inventoryId = req.params.id.trim();
        const deletedInventory = await inventory.findByIdAndDelete(inventoryId);
        if (!deletedInventory) {
            return res.status(404).send({ error: "inventory not found" });
        }
        res.status(200).send({ status: "inventory deleted", deletedInventory });
    } catch (err) {
        console.error("Error deleting inventory:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});


//search inventory
router.route("/get/:id").get(async (req, res) => {
    let inventoryId = req.params.id.trim();

    const Inventory = await inventory.findById(inventoryId).then((inventory) => {
        res.status(200).send({ status: "inventory fetch", inventory });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with find", error: err.message });
    });
});

module.exports = router;