const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json')
const PORT = 8000;

// ROUTES
app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>`;
    res.send(html);
})

//combining the routes

app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});

app.route("/api/users")
    .post((req, res) => {
        //TODO: Create new user
        const body = req.body;
        console.log("BODY", body);
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

// app.patch("api/users/:id", (req, res) => {
//     //TODO: Edit the  user with id
//     return res.json({ status: "pending" });
// })

// app.delete("api/users/:id", (req, res) => {
//     //TODO: Delete the  user with id
//     return res.json({ status: "pending" });
// })

// app.get("/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// })

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})

