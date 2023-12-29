# Blog Management System

This Node.js module manages a blog system, providing functionality for creating, retrieving, and deleting blog entries. It is designed to work seamlessly with a MongoDB database using the Mongoose ORM.

## Features

- **View All Blogs:** Retrieve and display all blogs in descending order based on their creation timestamp.
- **View Blog Details:** Retrieve and display detailed information about a specific blog.
- **Create New Blog:** Provide a form to create a new blog entry and store it in the database.
- **Delete Blog:** Delete a specific blog entry.

## Installation

Before running the code, ensure you have Node.js and MongoDB installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/ArthurJuma98/Blog_Site_App.git
   ```

2. Navigate to the project folder:

   ```bash
   cd your-repository
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB database and update the connection details in the `../models/blog.js` file.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000/blogs](http://localhost:3000/blogs) to interact with the blog system.

## Usage

- Visit [http://localhost:3000/blogs](http://localhost:3000/blogs) to view all blogs.
- Click on a blog entry to view its details.
- Create a new blog entry by navigating to [http://localhost:3000/create](http://localhost:3000/create).
- Delete a blog entry by clicking the delete button on the details page.

## API Endpoints

- **GET /blogs:** Retrieve all blogs.
- **GET /blogs/:id:** Retrieve details of a specific blog.
- **GET /create:** Display the form to create a new blog.
- **POST /create:** Save a new blog to the database.
- **DELETE /blogs/:id:** Delete a specific blog.

## Dependencies

- [Node.js](https://nodejs.org/): JavaScript runtime for server-side development.
- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.
