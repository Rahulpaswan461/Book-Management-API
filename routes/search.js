const express = require("express")
const Books = require("../models/books")

const router = express.Router()

router.get("/search",async (req,res)=>{
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
 })
module.exports = router