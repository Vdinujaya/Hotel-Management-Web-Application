const router = require("express").Router();
const bodyParser = require('body-parser');
const PDFDocument = require("pdfkit");
let employee = require("../Models/employee");

// Route to generate and send PDF report
router.get("/report", async (req, res) => {
    try {
        // Fetch all employees from the database
        const employees = await employee.find();

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as response

        // Set document metadata
        doc.info.Title = "Employee Report";
        doc.info.Author = "Your Company";

        // Add content to the PDF
        doc.fontSize(25).text("Employee Report", { align: "center" }).moveDown();
        doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(); // Include current date
        doc.moveDown(); // Add some space

        // Add employee details
        employees.forEach((employee, index) => {
            doc.fontSize(20).font('Helvetica-Bold').text(`Employee ${index + 1}`, { underline: true }).moveDown();
            doc.fontSize(15).font('Helvetica').text(`Name: ${employee.name}`);
            doc.fontSize(15).text(`Email: ${employee.email}`);
            doc.fontSize(15).text(`Role: ${employee.role}`);
            doc.fontSize(15).text(`Address: ${employee.address}`);
            doc.fontSize(15).text(`Age: ${employee.age}`);
            doc.moveDown();
        });

        // Finalize the PDF
        doc.end();
    } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

//add new employee
router.route("/add").post((req, res) => {

    const {
        name,
        email,
        age,
        role,
        address,
        description
    } = req.body;

    const newEmployee = new employee({
        name,
        email,
        age,
        role,
        address,
        description
    })

    newEmployee.save().then(() => {
        res.json("employee add successfully");
        console.log("employee add");
    }).catch((err) => {
        res.status(500).json("can't add employee");
        console.log("can't add employee", err);
    })

});

//all employee
router.route("/").get((req, res) => {
    // Fetching all customer from the database
    employee.find().then((employee) => {
        res.json(employee)
    }).catch((err) => {
        console.log(err);
    })
});

//update employee
// Define a PUT route for updating an employee by ID
router.route("/update/:id").put((req, res) => {
// Extract the employee ID from the request parameters and trim any whitespace
    let employeeId = req.params.id.trim();
// Destructure the request body to extract employee
    const {
        name,
        email,
        age,
        role,
        address,
        description
    } = req.body;

    const updateEmployee = {
        name,
        email,
        age,
        role,
        address,
        description
    }
    //Find the employee by ID and update with new details
    // { new: true } option returns the updated document
    employee.findByIdAndUpdate(employeeId, updateEmployee, { new: true }).then((updateEmployee) => {
        if (!updateEmployee) {
            return res.status(404).send({ status: "employee not founded" });
        }
        // If update is successful, send a 200 response with updated employee data
        res.status(200).send({ status: "employee updated", updateEmployee });
        console.log("employee updated");
    }).catch((err) => {
        console.log("employee not updated", err);
        res.status(500).send({ status: "employee not updated", error: err.message });
    })

});

//delete Employee

// Define a DELETE route for deleting an employee by ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const employeeId = req.params.id.trim();
        const deletedEmployee = await employee.findByIdAndDelete(employeeId);
        if (!deletedEmployee) {
            return res.status(404).send({ error: "employee not found" });
        }
        res.status(200).send({ status: "employee deleted", deletedEmployee });
    } catch (err) {
        console.error("Error deleting employee:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});

//search employee
router.route("/get/:id").get(async (req, res) => {
    // Extract the employee ID from the request parameters and trim any whitespace
    let employeeId = req.params.id.trim();
    // Attempt to find the employee by ID using Mongoose
    const Employee = await employee.findById(employeeId).then((employee) => {
        res.status(200).send({ status: "event fetch", employee });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with find", error: err.message });
    });
});

module.exports = router;