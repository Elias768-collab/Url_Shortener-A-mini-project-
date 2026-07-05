# URL Shortener API

A simple RESTful URL Shortener API built with **Node.js** and **Express.js**. This project allows users to create, retrieve, update, and delete shortened URLs while storing data in a local JSON file.

## Features

* Create a shortened URL
* Retrieve all shortened URLs
* Retrieve a single shortened URL by ID
* Update an existing URL
* Delete a URL
* Input validation
* File-based data storage using JSON
* RESTful API design

## Technologies Used

* Node.js
* Express.js
* JavaScript (ES Modules)
* UUID
* File System (fs)

## Project Structure

```
url_shortener/
│
├── data/
│   └── urls.json
│
├── routes/
│   └── urlRoutes.js
│
├── storage/
│   └── fileStorage.js
│
├── validation/
│   └── validateUrl.js
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Elias768-collab/Url_Shortener-A-mini-project-.git
```

Navigate into the project folder:

```bash
cd Url_Shortener-A-mini-project-
```

Install the dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

If your project uses nodemon:

```bash
npm run dev
```

The server will start on:

```
http://localhost:3000
```

## API Endpoints

### Get all URLs

```
GET /urls
```

### Get a single URL

```
GET /urls/:id
```

### Create a shortened URL

```
POST /urls
```

Example Request Body:

```json
{
  "originalUrl": "https://www.google.com"
}
```

### Update a URL

```
PUT /urls/:id
```

Example Request Body:

```json
{
  "originalUrl": "https://www.openai.com"
}
```

### Delete a URL

```
DELETE /urls/:id
```

## Validation

The API validates user input before saving data. Invalid or missing URLs return an appropriate error response.

## Data Storage

This project stores data in a local JSON file (`data/urls.json`) instead of a database. This approach keeps the project simple while demonstrating CRUD operations and file handling.

## Future Improvements

* MongoDB integration
* User authentication with JWT
* Click analytics
* Custom short URLs
* URL expiration
* Search functionality
* Pagination
* Unit and integration testing
* Deployment to Render or Railway

## Learning Objectives

This project was built to practice:

* Node.js fundamentals
* Express.js routing
* REST API development
* CRUD operations
* Request validation
* Working with the File System
* Git and GitHub
* Backend project structure

## Author

**Israel Ademu Elias**

GitHub: https://github.com/Elias768-collab
