# Blog_Site App

This is a simple web application for managing and displaying blog posts. It is built using Node.js, Express.js, MongoDB, and EJS templating engine. Users can view a list of blogs, read individual blog posts, and navigate through different pages of the application.

## Table of Contents

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Middleware & Static Files](#middleware--static-files)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Dependencies

- [Express.js](https://expressjs.com/): A web application framework for Node.js.
- [Morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
- [EJS](https://ejs.co/): Embedded JavaScript templating.
- [MongoDB](https://www.mongodb.com/): NoSQL database used for storing blog data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ArthurJuma98/Blog_Site_App.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Blog_Site_App
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB database and update the `dbURI` variable in `app.js` with your connection string.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Visit [http://localhost:3000](http://localhost:3000) in your browser to access the home page with a list of blogs.
- Navigate through different pages of the application and read individual blog posts.
- Explore the about page to learn more about the application.

## Middleware & Static Files

- The application uses [Morgan](https://www.npmjs.com/package/morgan) for HTTP request logging.
- Static files (e.g., stylesheets, images) are served from the 'public' directory.
- Middleware logs information about each incoming request, such as the hostname, path, and HTTP method.

## Routes

- The main application logic is organized into separate files. Blog-related routes are defined in `blogRoutes.js`.
- Additional routes handle redirects and a custom 404 error page.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE.md). See the [LICENSE.md](LICENSE.md) file for details.
