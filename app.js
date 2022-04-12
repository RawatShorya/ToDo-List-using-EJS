const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const _ = require("lodash");
const { stringify } = require("querystring");

const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Connection to Database Server
mongoose.connect("mongodb://localhost:27017/todolistDB");

//Creating a Schema
const itemsSchema = {
  name: string,
};

//Creating a mongoose model
const Item = mongoose.model("Item", itemsSchema);

//Creating some random items for todo list root route
const item1 = new Item({
  name: "Hola",
});

const item2 = new Item({
  name: "Hit + to add a work",
});

const item3 = new Item({
  name: "Click checkbox to delete",
});

const defaultItems = [item1, item2, item3];

//Creating Schema for immediate routes
// const listSchema = {
//   name: String,
//   items: [itemsSchema],
// };

// const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved default items to DB");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });
});

app.post("/", function (req, res) {});

app.listen(3000, function () {
  console.log("Server Has Started On Port 3000.");
});
