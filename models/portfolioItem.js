const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioItemSchema = new Schema({
  title: { type: String, required: true },
  deployedURL: { type: String, required: true },
  gitHubURL: { type: String, required: true },
  tags: [{type: String}],
});

const PortfolioItem = mongoose.model("PortfolioItem", portfolioItemSchema);

module.exports = PortfolioItem;
