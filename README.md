# NodeJS User Management API
This Node.js project is a simple RESTful API built using ExpressJS for handling user management tasks. It allows users to perform CRUD operations (Create, Read, Update, Delete) on user data.

## Installation
1) Clone the repository:
git clone https://github.com/Takshil2710/Node-JS-Project

2) Install dependencies:
npm install

## Usage

**Start the server:**

```bash
npm start
```

## Routes

1. **GET /users**
   - **Description:** Fetches all users.

2. **POST /users/:id**
   - **Description:** Creates a new user.

3. **GET /users/:id**
   - **Description:** Fetches details of a specific user.

4. **DELETE /users/:id**
   - **Description:** Deletes a specific user.

5. **PATCH /users/:id**
   - **Description:** Updates details of a specific user.

## Testing with Postman

You can use Postman to interact with the API endpoints:

1. Import the provided collection file into Postman.
2. Test each route by sending requests with the appropriate method and URL.
3. Verify responses to ensure correct functionality.

## Dependencies

- **Express:** Web application framework for Node.js.
- **nodemon:** Utility that monitors for changes in your source code and automatically restarts the server.
- **uuid:** Package for generating universally unique identifiers (UUIDs).

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.
