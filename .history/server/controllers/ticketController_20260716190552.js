const Ticket = require("../models/Ticket");
const validator = require("validator");

// Generate Unique Ticket ID
const generateTicketId = () => {
    return `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
};

// ================= CREATE TICKET =================
const createTicket = async (req, res) => {
    try {
        console.log(req.body);
        const {
            customerName,
            customerEmail,
            subject,
            description,
            priority
        } = req.body;

        // Required field validation
        if (
            !customerName ||
            !customerEmail ||
            !subject ||
            !description
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Email validation
        if (!validator.isEmail(customerEmail)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address"
            });
        }
        if (priority && !["Low", "Medium", "High"].includes(priority)) {
                return res.status(400).json({
                    success: false,
                    message: "Priority must be Low, Medium or High"
                });
            }

        // Create ticket
        const ticket = await Ticket.create({
            ticketId: generateTicketId(),
            customerName,
            customerEmail,
            subject,
            description,
            priority
        });

        res.status(201).json({
            success: true,
            message: "Ticket created successfully",
            ticket
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ================= GET ALL TICKETS =================
const getTickets = async (req, res) => {
    try {
        const { status, search } = req.query;

        let query = {};

        // Filter by status
        if (status) {
            query.status = status;
        }

        // Search functionality
        if (search) {
            query.$or = [
                {
                    customerName: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    customerEmail: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    subject: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    description: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    ticketId: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];
        }

        const tickets = await Ticket.find(query).sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: tickets.length,
            tickets
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ================= GET SINGLE TICKET =================
const getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findOne({
            ticketId: req.params.ticketId
        });

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket not found"
            });
        }

        res.status(200).json({
            success: true,
            ticket
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ================= UPDATE TICKET =================
const updateTicket = async (req, res) => {
    try {
        const { status, note } = req.body;

        const ticket = await Ticket.findOne({
            ticketId: req.params.ticketId
        });

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket not found"
            });
        }

        // Update status
        if (status) {
            const allowedStatuses = ["Open", "In Progress", "Closed"];
            if (!allowedStatuses.includes(status)) {
                    return res.status(400).json({
                        success: false,
                        message: "Invalid status value"
                    });
                }     
            ticket.status = status;
        }

        // Add note
        if (note) {
            ticket.notes.push({
                text: note
            });
        }

        await ticket.save();

        res.status(200).json({
            success: true,
            message: "Ticket updated successfully",
            updatedTicket: ticket
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//delete ticket

const deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findOneAndDelete({
            ticketId: req.params.ticketId
        });

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Ticket deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createTicket,
    getTickets,
    getTicket,
    updateTicket,
    deleteTicket
};