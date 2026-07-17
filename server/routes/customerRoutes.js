const express = require("express");
const Customer = require("../models/Customer");
const auth = require("../middleware/authMiddleware");

const router = express.Router();


// Add Customer
router.post("/",auth,async(req,res)=>{

    try{

        const customer = await Customer.create({
            ...req.body,
            createdBy:req.user.id
        });

        res.json({
            success:true,
            customer
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }

});


// Get All Customers
router.get("/",auth,async(req,res)=>{

    const customers = await Customer.find({
        createdBy:req.user.id
    });

    res.json(customers);

});


module.exports = router;