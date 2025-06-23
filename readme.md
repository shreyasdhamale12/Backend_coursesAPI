# CoursesAPI Backend

This is the backend for the CoursesAPI project, built with the MERN stack. It provides RESTful APIs for managing courses.

📽️ Postman Testing Video: https://drive.google.com/file/d/1VlpwQtiJ5YhDRpSoTyRiFvRIEbkIndGC/view?usp=sharing

## Features

- CRUD operations for courses
- MongoDB integration
- Express.js server
- Modular route and controller structure

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

```bash
git clone <repository-url>
cd backend_coursesAPI
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
MONGODB_URI=<your-mongodb-uri>
PORT=5000
```

### Running the Server

```bash
npm start
```

The server will run on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | /api/courses     | Get all courses       |
| GET    | /api/courses/:id | Get course by ID      |
| POST   | /api/courses     | Create a new course   |
| PUT    | /api/courses/:id | Update a course       |
| DELETE | /api/courses/:id | Delete a course       |

## Project Structure

```
backend_coursesAPI/
├── src/
│   ├── models/
│   │   └── Course.js
│   │   └── CourseInstance.js
│   ├── routes/
│   │   └── courses.js
│   │   └── instances.js
│   ├── controllers/
│   │   └── courseController.js
│   │   └── instanceController.js
│   ├── db/
│   │   └── connect.js  
│   └── index.js        
├── Dockerfile
├── .env
├── .github/workflows/docker-image.yml
├── package.json
└── README.md

```

