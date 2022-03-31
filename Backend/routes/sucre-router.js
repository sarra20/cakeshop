const express = require("express");
const router = express.Router();

// Import Sucre Model
const Sucre = require('../models/sucre');

// Business Logic: Get All Sucre
router.get("/", (req, res) => {
  console.log("Here into BL to get all Sucre");
  Sucre.find().then((docs) => {
    console.log("Here result after find", docs);
    if (docs) {
      res.status(200).json({
        message: "Here all  Sucre",
        result: docs,
      });
    }
  });
});

// Business Logic: Add Sucre
router.post("/", (req, res) => {
  console.log("Here into add Sucre", req.body);

  const sucreObj = new Sucre({
    nomProduit: req.body.nomProduit,
    quantite: req.body.quantite,
    type: req.body.type,
    prix: req.body.prix,
    
  });

  sucreObj.save((err, result) => {
    console.log("Here err", err);
    console.log("Here result", result);
    if (err) {
      res.status(200).json({
        message: "Error with DB",
      });
    } else {
      res.status(200).json({
        message: "Sucre Added with success",
      });
    }
  });
});

// Business Logic: Delete Sucre By ID
router.delete("/:id", (req, res) => {
  console.log("Here into delete", req.params.id);
  Sucre.deleteOne({ _id: req.params.id }).then((result) => {
    console.log("Here result after delete", result);
    if (result.deletedCount == 1) {
      res.status(200).json({
        message: " Deleted with success",
      });
    }
  });

});

// Business Logic: Get Sucre By ID
router.get("/:id", (req, res) => {
  console.log("Here into get Sucre by id", req.params.id);
  Sucre.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.status(200).json({
        result: doc,
        message: "Here Sucre object",
      });
    }
  });
});

// Business Logic: Edit Sucre By ID
router.put("/:id", (req, res) => {
  // param: id
  console.log("here into edit Sucre", req.params.id);
  // new values: req.body
  console.log("here into edit Sucre", req.body);

  Sucre.updateOne({ _id: req.params.id }, req.body).then((result) => {
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