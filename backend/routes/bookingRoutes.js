const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

/* =========================
   ADMIN AUTH MIDDLEWARE
========================= */
const adminAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token !== "admin-auth") {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
};

/* =========================
   ADMIN LOGIN (PLAIN PASSWORD)
========================= */
router.post("/admin/login", (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    return res.json({ success: true, token: "admin-auth" });
  }

  return res.status(401).json({ success: false });
});

/* =========================
   CREATE BOOKING
========================= */
router.post("/book", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true });
  } catch {
    res.status(500).json({ success: false });
  }
});

/* =========================
   GET BOOKINGS (ADMIN)
========================= */
router.get("/bookings", adminAuth, async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

/* =========================
   DELETE BOOKING (ADMIN)
========================= */
router.delete("/bookings/:id", adminAuth, async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});
// UPDATE BOOKING STATUS (ADMIN)
router.patch("/bookings/:id/status", adminAuth, async (req, res) => {
  const { status } = req.body;

  await Booking.findByIdAndUpdate(req.params.id, {
    status,
    $push: {
      statusHistory: {
        status,
      },
    },
  });

  res.json({ success: true });
});
module.exports = router;