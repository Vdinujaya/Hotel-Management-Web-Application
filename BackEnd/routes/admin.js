const router = require("express").Router();
const bodyParser = require('body-parser');

let admin = require("../Models/admin");

//add new admin
router.route("/add").post((req, res) => {

    const {
        username,
        email,
        password,
        role
    } = req.body;

    const newAdmin = new admin({
        username,
        email,
        password,
        role
    })

    newAdmin.save().then(() => {
        res.json("admin add successfully");
        console.log("admin add");
    }).catch((err) => {
        res.status(500).json("can't add admin");
        console.log("can't add admin", err);
    })

});

//all admin
router.route("/").get((req, res) => {
    // Fetching all customer from the database
    admin.find().then((admin) => {
        res.json(admin)
    }).catch((err) => {
        console.log(err);
    })
});

//update admin

router.route("/update/:id").put((req, res) => {

    let adminId = req.params.id.trim();

    const {
        username,
        email,
        password,
        role
    } = req.body;

    const updateadmin = {
        username,
        email,
        password,
        role
    }

    admin.findByIdAndUpdate(adminId, updateadmin, { new: true }).then((updateadmin) => {
        if (!updateadmin) {
            return res.status(404).send({ status: "admin not founded" });
        }
        res.status(200).send({ status: "admin updated", updateadmin });
        console.log("admin updated");
    }).catch((err) => {
        console.log("admin not updated", err);
        res.status(500).send({ status: "admin not updated", error: err.message });
    })

});

//delete supplier
router.delete("/delete/:id", async (req, res) => {
    try {
        const adminId = req.params.id.trim();
        const deletedadmin = await admin.findByIdAndDelete(adminId);
        if (!deletedadmin) {
            return res.status(404).send({ error: "admin not found" });
        }
        res.status(200).send({ status: "admin deleted", deletedadmin });
    } catch (err) {
        console.error("Error deleting admin:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});

//search admin
router.route("/get/:id").get(async (req, res) => {
    let adminId = req.params.id.trim();

    const Admin = await admin.findById(adminId).then((admin) => {
        res.status(200).send({ status: "event fetch", admin });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with find", error: err.message });
    });
});

module.exports = router;