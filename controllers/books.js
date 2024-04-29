const Books = require("../models/books")

async function addBookToLibaray(req,res){
      const { title, author, publicationYear } = req.body;
 
     if (!title || !author || !publicationYear) {
         return res.status(400).json({ msg: "All fields are required" });
     }
 
     try {
         await Books.create({
             title,
             author,
             publicationYear,
         });
         
         return res.status(201).json({ msg: "Book Added Successfully" });
     } catch (error) {
         return res.status(500).json({ msg: "Internal Server Error" });
     }
}

async function getAllBooksFromCollection(req,res){
      try {
            const allBooks = await Books.find({});
            
            if (allBooks.length === 0) {
                return res.status(404).json({ msg: "No books found" });
            }
            
            return res.status(200).json(allBooks);
        } catch (error) {
            return res.status(500).json({ msg: "Internal Server Error" });
        }
}

async function getBooksFromCollectionById(req,res){
      const id = req.params.id;
 
      try {
          const bookData = await Books.findById(id);
  
          if (!bookData) {
              return res.status(404).json({ msg: "No data available for the provided ID" });
          }
  
          return res.status(200).json(bookData);
      } catch (error) {
          return res.status(500).json({ msg: "Internal Server Error" });
      }
}

async function updateBookInformationById(req,res){
      const id = req.params.id;
     const { title, author, publicationYear } = req.body;
 
     try {
         const updateBookInformation = await Books.findByIdAndUpdate(id, {
             title,
             author,
             publicationYear,
         }, { new: true });
 
         if (!updateBookInformation) {
             return res.status(404).json({ msg: "Book not found with the provided ID" });
         }
 
         return res.status(200).json(updateBookInformation);
     } catch (error) {
         return res.status(500).json({ msg: "Internal Server Error" });
     }
}

async function deleteBookInformationById(req,res){
      const id = req.params.id;
 
      try {
          const deletedBook = await Books.findByIdAndDelete(id);
  
          if (!deletedBook) {
              return res.status(404).json({ msg: "Book not found with the provided ID" });
          }
  
          return res.status(200).json({ msg: "Book Deleted Successfully" });
      } catch (error) {
          return res.status(500).json({ msg: "Internal Server Error" });
      }
}


module.exports={
    addBookToLibaray,
    getAllBooksFromCollection,
    getBooksFromCollectionById,
    updateBookInformationById,
    deleteBookInformationById,
}