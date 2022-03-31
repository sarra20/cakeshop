const mongoose = require("mongoose");

const sucreSchema = mongoose.Schema({
  nomProduit: String,
  quantite: Number,
  type:String,
  prix: Number
  
});

const sucre = mongoose.model("Sucre", sucreSchema);

module.exports = sucre;
