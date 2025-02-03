# Alpha Male Magazine API - A Platform for Male Spirituality

## Project Overview
Alpha Male Magazine Backend API serves as the data management system for the Alpha Male Magazine platform. This Node.js-based API handles article management, author profiles, and tag systems, providing a robust backend infrastructure for the frontend application.

## Features
- Complete article management system
- Author profile handling
- Tag management system
- PostgreSQL database integration
- RESTful API endpoints
- Fallback static data system
- Error handling and logging

## Technologies Used
### Backend
- Node.js
- Express.js
- PostgreSQL
- CORS
- dotenv
- nodemon (development)

### Database
- PostgreSQL
- pg (node-postgres)

## Getting Started
## Prerequisites
- Node.js (version 16.x)
- PostgreSQL
- npm

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/eikemx/Alpha-Male-Magazine-node-BE.git
    cd Alpha-Male-Magazine-node-BE
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables
    Create a `.env` file in the root directory:
    ```env
    DB_USER=your_username
    DB_HOST=localhost
    DB_NAME=eikemerx
    DB_PORT=5432
    ```

4. Initialize the database
   ````bash
   # Connect to PostgreSQL
   psql postgres

   # Create the database
   CREATE DATABASE eikemerx;

   # Exit psql
   \q

   # Run initialization script
   psql -d eikemerx -f database/init.sql
   ````

## Running the Application

Development mode (with auto-reload):
    ```
    npm run dev
    ```

Production mode:
    ```
    npm start
    ```

The server will start on port 3013 (or the port specified in your environment variables).

## Project Structure

```bash
alpha-male-magazine-backend/
├── data/
│ └── blogData.js # Static data for fallback
├── database/
│ ├── client.js # Database connection
│ └── init.sql # Database initialization
├── public/ # Images
├── routes/
│ ├── articleRouter.js # Article routes
│ ├── authorRouter.js # Author routes
│ └── tagRouter.js # Tag routes
├── .env # Environment variables
├── index.js # Application entry point
└── package.json # Project dependencies
```

## API Endpoints in Detail

### Articles
1. **Get All Articles**
   - Endpoint: `GET /api/alpha/articles`
   - Returns all articles with pagination

2. **Get Single Article**
   - Endpoint: `GET /api/alpha/articles/:id`
   - Returns detailed article information with author

3. **Create Article**
   - Endpoint: `POST /api/alpha/articles`
   - Creates new article entry

4. **Update Article**
   - Endpoint: `PUT /api/alpha/articles/:id`
   - Updates existing article

5. **Delete Article**
   - Endpoint: `DELETE /api/alpha/articles/:id`
   - Removes article from database

### Authors
1. **Get All Authors**
   - Endpoint: `GET /api/alpha/authors`
   - Returns list of all authors

2. **Get Single Author**
   - Endpoint: `GET /api/alpha/authors/:id`
   - Returns detailed author information

### Tags
- **Get All Tags**
  - Endpoint: `GET /api/alpha/tags`
  - Returns available article tags

## Related Repositories
- Frontend Application: [Alpha-Male-Magazine-Node-Frontend](https://github.com/eikemx/Alpha-Male-Magazine-node-FE)

## Scripts
- `npm run dev`: Starts development server with nodemon
- `npm start`: Starts production server
- `npm test`: Runs test suite

## Database Schema
Detailed database structure including tables for:
- Articles
- Authors
- Tags
With proper relationships and constraints

## Contact
- GitHub: [@eikemx](https://github.com/eikemx)
- LinkedIn: [Eike Merx](https://www.linkedin.com/in/eike-merx-50b111216/)
- XING: [Eike Merx](https://www.xing.com/profile/Eike_Merx/web_profiles)

## Acknowledgments
- WBS Coding School
- Project collaborator: tognut86

---
*This project was created as part of the WBS Coding School Bootcamp curriculum.*