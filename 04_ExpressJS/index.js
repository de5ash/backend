const express = require("express")
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from Home Page")
});

app.get('/about', (req, res) => {
    return res.send(`HEY ${req.query.name}`)
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

