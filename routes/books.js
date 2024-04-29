const express = require("express")
const Books = require("../models/books")
const fs = require("node:fs");
const { addBookToLibaray, getAllBooksFromCollection, getBooksFromCollectionById, updateBookInformationById, deleteBookInformationById, searchBooks } = require("../controllers/books");

const router = express.Router()

// to Add the book
router.post("/",addBookToLibaray);
 
//get all the books from the collection
router.get("/", getAllBooksFromCollection);
 
//get the individual book
router.get("/:id", getBooksFromCollectionById);
 
//update the book information
router.patch("/:id", updateBookInformationById);
 
// delete the book information
router.delete("/:id", deleteBookInformationById);

// Filter books by author or publicationYear
router.get("/search", searchBooks);
 
 
module.exports = router