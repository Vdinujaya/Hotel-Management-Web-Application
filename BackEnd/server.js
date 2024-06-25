const express= require("express"); // Framework for building web applications with Node.js.
const mongoose=require("mongoose");
const bodyParser=require("body-parser");//Middleware for parsing incoming request bodies.
const cors=require("cors");//Middleware for enabling Cross-Origin Resource Sharing.
const dotenv=require("dotenv");// Loads environment variables from

const app=express();
require("dotenv").config();// Load environment variables from .env file
const PORT=process.env.Port || 6655// Define the port to listen on
app.use(cors());// Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json());// Parse incoming request bodies as JSON
app.use(express.static('public'));

const URL=process.env.MONGODB_URL;


mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const con = mongoose.connection;
con.once("open", () => {
  console.log("Mongoose Connection Successful");
});

const customerRouter=require("./routes/customer.js");// importing the router object from the file located 
app.use("/customer",customerRouter);//requests that match the specified base path

const roomRouter=require("./routes/room.js");
app.use("/room",roomRouter);

const eventRouter=require("./routes/event.js");
app.use("/event",eventRouter);

const supplierRouter=require("./routes/supplier.js");
app.use("/supplier",supplierRouter);

const adminRouter=require("./routes/admin.js");
app.use("/admin",adminRouter);

const employeeRouter=require("./routes/employee.js");
app.use("/employee",employeeRouter);

const inventoryRouter=require("./routes/inventory.js");
app.use("/inventory",inventoryRouter);

const bookingRouter=require("./routes/booking.js");
app.use("/booking",bookingRouter);

const feedbackRouter=require("./routes/Feedback.js");
app.use("/feedback",feedbackRouter);

const contactRouter=require("./routes/contact.js");
app.use("/contact",contactRouter);



app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`); // Log server start with the selected port
  });