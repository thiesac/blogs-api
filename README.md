```markdown
# Blogs API

The Blogs API is a Node.js-based RESTful API that allows users to manage and interact with blog posts. It provides endpoints for creating, retrieving, updating, and deleting blog posts, as well as user authentication for blog post management.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgment](#acknowledgment)

## Features

- User authentication with JSON Web Tokens (JWT).
- Create, read, and update blog posts.
- Retrieve a list of all blog posts or a specific post by ID.
- Secure and structured API design.

## Technologies

- Node.js
- Express.js
- Sequelize (with MySQL)
- JSON Web Tokens (JWT)
- bcrypt.js (for password hashing)

## Getting Started

### Prerequisites

Before running the Blogs API locally or on a server, you'll need to have the following software and tools installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- Git: [Download Git](https://git-scm.com/downloads) (optional, for cloning the repository)

### Installation

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/thiesac/blogs-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blogs-api
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory of the project and configure it with the following variables:

   ```env
   PORT=3000
   DATABASE_URL=YOUR_DATABASE_URL
   JWT_SECRET=YOUR_SECRET_KEY
   ```

   Replace `YOUR_DATABASE_URL` with your database connection URL (e.g., for PostgreSQL, MySQL, etc.) and `YOUR_SECRET_KEY` with your preferred secret key for JWT.

5. Start the API:

   ```bash
   npm start
   ```

The API should now be running locally on port 3000. You can access it by navigating to `http://localhost:3000` in your web browser or by using API client software like [Postman](https://www.postman.com/).

### Environment Variables

To configure the environment variables in the `.env` file, you can use the following example:

```env
NODE_ENV=development
API_PORT=3001
API_HOST=localhost
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password
JWT_SECRET=suaSenhaSecreta
```

Make sure to replace the values with the appropriate settings for your environment.

## Usage

### Authentication

To use the API, you'll need to obtain an access token through authentication. Here's how to do it:

1. Make a `POST` request to `/api/auth/login` with your credentials in the request body:

   ```json
   {
     "email": "your@email.com",
     "password": "your_password"
   }
   ```

   You'll receive a JSON response containing the access token:

   ```json
   {
     "token": "your_access_token_here"
   }
   ```

2. Include the access token in the headers of your requests with the key `Authorization`. For example:

   ```http
   Authorization: Bearer your_access_token_here
   ```

### Endpoints

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in and receive an access token.
- `GET /api/posts`: Retrieve a list of all blog posts.
- `GET /api/posts/:id`: Retrieve a specific blog post by ID.
- `POST /api/posts`: Create a new blog post.
- `PUT /api/posts/:id`: Update an existing blog post by ID.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the application source code.
  - `config/`: Configuration files (e.g., for JWT and database).
  - `controllers/`: Request handling controllers.
  - `middlewares/`: Custom middleware functions.
  - `models/`: Sequelize models for data schemas.
  - `routes/`: API route definitions.
  - `index.js`: Main application entry point.
- `.env`: Configuration file for environment variables.
- `API_DOCUMENTATION.md`: Detailed API documentation.

## Contributing

Contributions to this project are welcome! If you have bug fixes, feature additions, or improvements to the documentation, please feel free to open an issue or submit a pull request.


## Acknowledgment

I would like to acknowledge [Trybe](https://www.betrybe.com/) and colleagues for their support and guidance during the development of this project.
