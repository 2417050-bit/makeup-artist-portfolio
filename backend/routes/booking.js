const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// 📌 Save booking
router.post('/book', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();

        res.status(201).send("Booking Saved Successfully ✅");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error saving booking ❌");
    }
});

// 📌 Get all bookings (Admin panel)
router.get('/all', async (req, res) => {
    try {
        const data = await Booking.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching bookings ❌" });
    }
});

module.exports = router;
router.delete('/delete/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.send("Booking Deleted Successfully ❌");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error deleting booking");
    }
});
router.put("/update-status/:id", async (req, res) => {
  try {
    const { status } = req.body;

    await Booking.findByIdAndUpdate(req.params.id, { status });

    res.json({
      success: true,
      message: "Status updated successfully"
    });

  } catch (error) {
    res.json({
      success: false,
      message: "Error updating status"
    });
  }
});
module.exports = router;