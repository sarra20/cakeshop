const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
  nomProduit: String,
  quantite: Number,
  prix: Number
  
});

const sale = mongoose.model("Sale", saleSchema);

module.exports = sale;
