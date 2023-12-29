# Blog Routes

This module defines the routes for managing blog entries in a Node.js application using Express. The routes include functionality for retrieving all blogs, creating a new blog, viewing blog details, and deleting a blog.

## Installation

Before using these routes in your project, ensure you have Node.js and Express installed.

1. Install Express:

   ```bash
   npm install express
   ```

2. Use the `router` in your application:

   ```javascript
   const express = require('express');
   const blogController = require('../controllers/blogController');

   const router = express.Router();

   // ... (Copy the code for your blog routes)

   module.exports = router;
   ```

## Routes

- **GET /blogs:** Retrieve and display all blogs.
- **POST /blogs:** Create a new blog entry.
- **GET /blogs/create:** Display the form to create a new blog.
- **GET /blogs/:id:** Retrieve and display details of a specific blog.
- **DELETE /blogs/:id:** Delete a specific blog.

## Usage

1. Import the `blogController` in your application:

   ```javascript
   const blogController = require('./path-to-your-blog-controller');
   ```

2. Use the router in your application:

   ```javascript
   const express = require('express');
   const blogRoutes = require('./path-to-your-blog-routes');

   const app = express();

   app.use(blogRoutes);
   ```

3. Access the blog routes in your application:

   - [http://localhost:3000/blogs](http://localhost:3000/blogs): Retrieve all blogs.
   - [http://localhost:3000/blogs/create](http://localhost:3000/blogs/create): Display the form to create a new blog.
   - [http://localhost:3000/blogs/:id](http://localhost:3000/blogs/:id): Retrieve details of a specific blog.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.
