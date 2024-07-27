# My NodeJS Application

## Description
This is an application developed in NodeJS using MySQL as the database. The application utilizes the following libraries and frameworks:

- [ExpressJS](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Handlebars](https://handlebarsjs.com/): Template engine for generating dynamic HTML.
- [Sequelize](https://sequelize.org/): Promise-based Node.js ORM for various SQL databases.
- [Body Parser](https://github.com/expressjs/body-parser): Middleware for parsing the body of HTTP requests.

## Prerequisites
Before starting, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) v14.x or higher
- [MySQL](https://www.mysql.com/) v8.x or higher

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Guiziin25/Learn-NodeJS.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```
3. Install the dependencies:
    ```bash
    npm install --save-dev nodemon
    npm install --save express sequelize body-parser handlebars
    ```
4. Set up the MySQL database. Create a database and configure the credentials in the `.env` file:
    ```dotenv
    DB_NAME=your_database
    DB_USER=your_user
    DB_PASSWORD=your_password
    DB_HOST=localhost
    DB_DIALECT=mysql
    ```

## Usage
1. Start the application:
    ```bash
    nodemon start
    ```
2. Access the application in your browser at `http://localhost:3000`.

## Project Structure
```plaintext
├── config
│   └── database.js        # Sequelize configuration
├── controllers            # Route handlers
│   └── userController.js
├── models                 # Sequelize models
│   └── User.js
├── routes                 # Route definitions
│   └── userRoutes.js
├── views                  # Handlebars templates
│   └── index.handlebars
├── .env                   # Environment variables
├── app.js                 # Main application file
└── package.json           # NPM configuration file
