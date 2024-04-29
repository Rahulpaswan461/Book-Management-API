# Book Management API
This is a simple book management API built using Node.js following the MVC (Model-View-Controller) architectural pattern.

## Features
- User authentication using cookies and JWT tokens.
- CRUD operations for managing book entries (title, author, publication year).
- Basic security measures implemented, including password hashing using the crypto module.
- Separation of concerns with distinct models for users and books.
- Use of middleware for authentication checks.
- Use of EJS for rendering some frontend views.

## Getting Started
### Prerequisites
- Node.js installed on your machine.
- MongoDB database instance.

## Installation
- Clone the repository: git clone https://github.com/Rahulpaswan461/Book-Management-API
- Navigate to the project directory: cd Book-Management
- Install dependencies: npm install

# Usage
- Start the server: npm start
- Use API endpoints with tools like Postman or cURL.
- POST /user/signup: Register a new user.
- POST /user/signin: Log in with existing user credentials.

## Books
- GET /api/books: Get all books.
- GET /api/books/:id: Get a book by ID.
- POST /api/books: Create a new book.
- PUT /api/books/:id: Update a book by ID.
- DELETE /api/books/:id: Delete a book by ID.
- GET /api/books?author=<author>: Filter books by author.
- GET /api/search?publicationYear=<year>: Filter books by publication year.


# Security
Input validation is implemented to prevent malicious data.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
