const express = require("express")
const Books = require("../models/books")
const fs = require("node:fs");
const { addBookToLibaray, getAllBooksFromCollection, getBooksFromCollectionById, updateBookInformationById, deleteBookInformationById } = require("../controllers/books");

const router = express.Router()

// to Add the book
router.post("/books",addBookToLibaray);
 
//get all the books from the collection
router.get("/books", getAllBooksFromCollection);
 
//get the individual book
router.get("/books/:id", getBooksFromCollectionById);
 
//update the book information
router.patch("/books/:id", updateBookInformationById);
 
// delete the book information
router.delete("/books/:id", deleteBookInformationById);

router.get("/search", async (req, res) => {
     try {
         let query = {};
 
         // Check if query parameter 'author' is present
         if (req.query.author) {
             query.author = req.query.author;
         }
 
         // Check if query parameter 'publicationYear' is present
         if (req.query.publicationYear) {
             query.publicationYear = req.query.publicationYear;
         }
 
         const filteredBooks = await Books.find(query);
 
         if (!filteredBooks || filteredBooks.length === 0) {
             return res.status(404).json({ msg: "No books found with the specified filter criteria" });
         }
 
         return res.status(200).json(filteredBooks);
     } catch (error) {
         console.error(error);
         return res.status(500).json({ msg: "Internal Server Error" });
     }
 });
 
 
module.exports = router