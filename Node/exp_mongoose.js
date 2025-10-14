const mongoose = require("mongoose");

async function main() {

  await mongoose.connect("mongodb://localhost:27017/test");
  console.log("Connected to MongoDB");

  // Schema definition
  const articleSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    title: String,
    body: String,
    tags: [String],
    viewed: Number,
  });

  // Static method
  articleSchema.statics.findViewedGreaterThan = function (number) {
    return this.find({ viewed: { $gt: number } });
  }

  // Instance method
  articleSchema.methods.findViewedGreaterThanThisViewed = function () {
    return this.model("Article").find({ viewed: { $gt: this.viewed } });
  };

  // Model creation
  const Article = mongoose.model("Article", articleSchema);

  // Insert Documents
  const newArticle = new Article({
    date: new Date("2022-01-03"),
    title: "Mongoose Example",
    tags: ["NoSQL"],
    viewed: 8,
  });

  await newArticle.save();

  // Query articles
  var results = await Article.find({ viewed: { $gt: 8 } })
    .select({ title: 1, tags: 1, viewed: 1 });
  // console.log(' Articles with viewed > 8:', results);

  // Using static method
  results = await Article.findViewedGreaterThan();
  // console.log(' Articles with viewed > 8 (static method):', results);

  // Using instance method
  results = await newArticle.findViewedGreaterThanThisViewed();
  console.log(' Articles with viewed > this.viewed (instance method):', results);

  // Update articles
  await Article.updateMany({ title: "Mongoose Example" }, { $set: { viewed: 17 } });
  results = await Article.find({ viewed: { $eq: 17 } });
  // console.log(' Articles with viewed = 17:', results);

  // Delete article
  const deletedArticle = await Article.findOneAndDelete({ title: "Mongoose Example" });
  // console.log(' Deleted article:', deletedArticle);

  // Aggregation
  results = await Article.aggregate([
    { $match: { tags: { $in: ["Python", "MongoDB"] } } },
    {
      $group: {
        _id: "$date",
        total_viewed: { $sum: "$viewed" },
        count: { $count: {} },
      },
    },
  ])
  console.log(' Aggregation results:', results);
}

main();