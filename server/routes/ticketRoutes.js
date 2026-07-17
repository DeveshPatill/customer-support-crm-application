const express = require("express");
const router = express.Router();

const {
    createTicket,
    getTickets,
    getTicket,
    updateTicket,
    deleteTicket
} = require("../controllers/ticketController");

router.post("/", createTicket);
router.get("/", getTickets);
router.get("/:ticketId", getTicket);
router.put("/:ticketId", updateTicket);
router.delete("/:ticketId", deleteTicket);

module.exports = router;