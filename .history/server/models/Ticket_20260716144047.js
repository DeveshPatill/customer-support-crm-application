const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    text: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ticketSchema = new mongoose.Schema(
    {
        ticketId: {
            type: String,
            unique: true
        },

        customerName: {
            type: String,
            required: true
        },

        customerEmail: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["Open", "In Progress", "Closed"],
            default: "Open"
        },

        notes: [noteSchema]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Ticket", ticketSchema);