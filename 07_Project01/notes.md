### Initialization and Setup

```javascript
const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const PORT = 8000;
```

- **Line 1**: Imports the Express framework.
- **Line 2**: Creates an instance of the Express application.
- **Line 3**: Imports user data from a JSON file named `MOCK_DATA.json`.
- **Line 4**: Specifies the port number (8000) the server will listen on.

### Handling Routes

#### Route for Getting All Users (GET `/api/users`)

```javascript
app.get("/api/users", (req, res) => {
  return res.json(users);
});
```

- Defines a route to handle GET requests to `/api/users`.
- Sends a JSON response containing all user data when this route is accessed.

#### Route for Listing Users with HTML Response (GET `/users`)

```javascript
app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>`;
  res.send(html);
});
```

- Handles GET requests to `/users`.
- Generates an HTML list of user first names and sends it as a response.

#### Route for Getting a User by ID (GET `/api/users/:id`)

```javascript
app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
```

- Defines a route for GET requests to `/api/users/:id`, where `:id` is a placeholder for the user ID.
- Retrieves a user by their ID from the `users` array and sends their data as JSON.

#### Route for Creating, Editing, and Deleting Users (POST, PATCH, DELETE `/api/users`)

```javascript
app
  .route("/api/users")
  .post((req, res) => {
    //TODO: Create new user
    return res.json({ status: "pending" });
  })
  .patch((req, res) => {
    // Edit user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // Delete user with id
    return res.json({ status: "pending" });
  });
```

- Combines routes for POST, PATCH, and DELETE requests to `/api/users`.
- The `post` handler is for creating a new user (currently set to return a pending status).
- The `patch` handler is for editing a user (also set to return a pending status).
- The `delete` handler is for deleting a user (returning a pending status as well).

### Server Start

```javascript
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
```

- Starts the server, listening on port 8000.
- Outputs a message to the console confirming that the server has started successfully.

### Summary

- This code sets up various routes using Express to handle different types of HTTP requests (`GET`, `POST`, `PATCH`, `DELETE`) for managing user data stored in `MOCK_DATA.json`. These routes allow fetching all users, listing user names as HTML, retrieving a user by ID, and performing create, edit, and delete operations on users.

=>We can send data via body, query parameters...etc
