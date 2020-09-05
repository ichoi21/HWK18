const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = {
  authors: ["Bill Watterson"],
  description: "Cartoon thats always a classic!",
  image:
    "http://books.google.com/books/content?id=IuxzTBWetEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  link:
    "http://books.google.com/books?id=IuxzTBWetEIC&printsec=frontcover&dq=Calvin+and+Hobbes&hl=&cd=2&source=gbs_api",
  title: "The Authoritative Calvin And Hobbes",
};

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
