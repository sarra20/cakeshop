const express = require("express");
const router = express.Router();

// Import Sale Model
const Sale = require('../models/sale');

// Business Logic: Get All sale
router.get("/", (req, res) => {
  console.log("Here into BL to get all sale");
  Sale.find().then((docs) => {
    console.log("Here result after find", docs);
    if (docs) {
      res.status(200).json({
        message: "Here all  Sale",
        result: docs,
      });
    }
  });
});

// Business Logic: Add Sale
router.post("/", (req, res) => {
  console.log("Here into add Sale", req.body);

  const saleObj = new Sale({
    nomProduit: req.body.nomProduit,
    quantite: req.body.quantite,
    prix: req.body.prix,
    
  });

  saleObj.save((err, result) => {
    console.log("Here err", err);
    console.log("Here result", result);
    if (err) {
      res.status(200).json({
        message: "Error with DB",
      });
    } else {
      res.status(200).json({
        message: "Sale Added with success",
      });
    }
  });
});

// Business Logic: Delete Sale By ID
router.delete("/:id", (req, res) => {
  console.log("Here into delete", req.params.id);
  Sale.deleteOne({ _id: req.params.id }).then((result) => {
    console.log("Here result after delete", result);
    if (result.deletedCount == 1) {
      res.status(200).json({
        message: " Deleted with success",
      });
    }
  });

});

// Business Logic: Get Sale By ID
router.get("/:id", (req, res) => {
  console.log("Here into get Sale by id", req.params.id);
  Sale.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.status(200).json({
        result: doc,
        message: "Here Sale object",
      });
    }
  });
});

// Business Logic: Edit Sale By ID
router.put("/:id", (req, res) => {
  // param: id
  console.log("here into edit Sale", req.params.id);
  // new values: req.body
  console.log("here into edit Sale", req.body);

  Sale.updateOne({ _id: req.params.id }, req.body).then((result) => {
    console.log("Here result after update", result);
    if (result.nModified == 1) {
      res.status(200).json({
        message: "Edited with success",
      });
    }
  });
});

// exports router
module.exports = router;