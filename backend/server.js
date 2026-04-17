const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/makeupDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Import routes
const bookingRoutes = require('./routes/booking');

// Use routes
app.use('/', bookingRoutes);

// Test route
app.get('/', (req, res) => {
    res.send("Server Running 🚀");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});