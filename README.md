This is a backend application built with Node.js and Express.js, providing APIs for a frontend application. The project uses Prisma as an ORM to interact with a PostgreSQL database, includes custom middleware for error handling, and supports CORS. The backend is fully testable using Jest.

Features

RESTful APIs built with Express.js

Database integration using Prisma and PostgreSQL

Global error handling middleware for cleaner responses

Cross-origin requests supported with CORS

Unit and integration testing using Jest

Structured and modular code for maintainability

Tech Stack

Runtime: Node.js

Framework: Express.js

Database: PostgreSQL

ORM: Prisma

Testing: Jest

Other Libraries: CORS, dotenv

Language: JavaScript

Installation & Setup

Clone the repository

git clone <your-repo-url>


Navigate to the project folder

cd <project-folder>


Install dependencies

npm install


or

yarn


Set up environment variables
Create a .env file in the root directory with the following example:

DATABASE_URL=postgresql://username:password@localhost:5432/db_name
PORT=5000


Run database migrations (if required)

npx prisma migrate dev


Start the server

npm run dev


or

yarn dev


The server will run on the port specified in .env (default: 5000).

Running Tests

To run tests using Jest:

npm test


or

yarn test



Usage

The backend exposes REST APIs to perform CRUD operations.

Errors are handled globally by custom middleware and returned with proper status codes.

Supports cross-origin requests, allowing seamless integration with the frontend.

Author

Rubul Tanti
