const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection was successful");
})

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})


app.use("/activity", require("./routes/activity/Activity"));

app.use("/travel", require("./routes/air_ticket/AirTicket"));
app.use("/bookFlight", require("./routes/air_ticket/BookFlight"));
app.use("/mybooking", require("./routes/air_ticket/MyBooking"));

app.use("/api/guid", require("./routes/guide/GuideRoute"));
app.use("/contactGuid", require("./routes/guide/ContactGuide"));

app.use("/Admin", require("./routes/hotel/AdminLogin"));
app.use("/access", require("./routes/hotel/Admin_Panel_ProfileManagement"));
app.use("/hotelbooking", require("./routes/hotel/HotelBooking"));
app.use("/packagebooking", require("./routes/hotel/Packagebooking.js"));
app.use("/hotelpackage", require("./routes/hotel/HotelPackage"));

app.use("/payment", require("./routes/payment/payments.js"));

app.use("/insuarance", require("./routes/insurance/Insuarance"));
app.use("/admin", require("./routes/insurance/Admin"));
