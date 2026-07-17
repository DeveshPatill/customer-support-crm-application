const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
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
            required: true,
            trim: true
        },

        customerEmail: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        subject: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium"
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