const router = require("express").Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const PDFDocument = require("pdfkit");

let room = require("../Models/room");

// Route to generate and send PDF report
router.get("/report", async (req, res) => {
    try {
        // Fetch all rooms from the database
        const rooms = await room.find();

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as response

        // Set document metadata
        doc.info.Title = "Rooms Report";
        doc.info.Author = "Your Company";

        // Add content to the PDF
        doc.fontSize(25).text("Rooms Report", { align: "center" }).moveDown();
        doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(); // Include current date
        doc.moveDown(); // Add some space

        // Add room details
        rooms.forEach((room, index) => {
            doc.fontSize(20).font('Helvetica-Bold').text(`Room ${index + 1}`, { underline: true }).moveDown();
            doc.fontSize(15).font('Helvetica').text(`Room Number: ${room.roomNumber}`);
            doc.fontSize(15).text(`Room Type: ${room.roomType}`);
            doc.fontSize(15).text(`Bath Count: ${room.bathCount}`);
            doc.fontSize(15).text(`Bed Details: ${room.bedDetails}`);
            doc.fontSize(15).text(`Price: ${room.price}`);
            doc.fontSize(15).text(`Capacity: ${room.capacity}`);
            doc.fontSize(15).text(`Description: ${room.description}`);
            doc.moveDown();
        });

        // Finalize the PDF
        doc.end();
    } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images') // Choose the directory where you want to store the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname)) // Use the original file name for storing
    }
  });

  const upload = multer({ storage: storage });


//add new customer
router.route("/add").post(upload.single('image'),(req,res)=>{

    console.log(req.file);
    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
      }

    // Retrieving vehicle details from request body
    const image=req.file.filename; // Get the path to the uploaded image

    const {
        roomNumber,
        roomType,
        bedDetails,
        bathCount,
        price,
        capacity,
        description,
        isAvailable
    } = req.body;

    const newRoom = new room({
        image,
        roomNumber,
        roomType,
        bedDetails,
        bathCount,
        price,
        capacity,
        description,
        isAvailable
    })

    newRoom.save().then(() => {
        res.json("room add successfully");
        console.log("room add");
    }).catch((err) => {
        res.status(500).json("can't add room");
        console.log("can't add room", err);
    })

});

//Get All Rooms
router.route("/").get((req, res) => {
    // Fetching all customer from the database
    room.find().then((room) => {
        res.json(room)
    }).catch((err) => {
        console.log(err);
    })
});


//update Room using RoomId

router.route("/update/:id").put((req, res) => {

    let roomId = req.params.id.trim();

    const {
        roomNumber,
        roomType,
        bedDetails,
        bathCount,
        price,
        capacity,
        description,
        isAvailable
    } = req.body;

    const updateRoom = {
        roomNumber,
        roomType,
        bedDetails,
        bathCount,
        price,
        capacity,
        description,
        isAvailable
    }

    room.findByIdAndUpdate(roomId, updateRoom, { new: true }).then((updateRoom) => {
        if (!updateRoom) {
            return res.status(404).send({ status: "room not founded" });

        }
        res.status(200).send({ status: "room updated", updateRoom });
        console.log("room updated");
    }).catch((err) => {
        console.log("room not updated", err);
        res.status(500).send({ status: "room not updated", error: err.message });
    })

});

//delete room using RoomId
router.delete("/delete/:id", async (req, res) => {
    try {
        const roomId = req.params.id.trim();
        const deletedRoom = await room.findByIdAndDelete(roomId);
        if (!deletedRoom) {
            return res.status(404).send({ error: "room not found" });
        }
        res.status(200).send({ status: "room deleted", deletedRoom });
    } catch (err) {
        console.error("Error deleting room:", err);
        res.status(500).send({ error: "Internal server error" });
    }
});

//search Room Using RoomId
router.route("/get/:id").get(async (req, res) => {
    let roomId = req.params.id.trim();

    const Room = await room.findById(roomId).then((room) => {
        res.status(200).send({ status: "room fetch", room });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with find", error: err.message });
    });
});

module.exports = router;


