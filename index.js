const express = require('express');
const path = require('path');

const app = express();

const servePath = path.join(__dirname, './public');
const PORT = process.env.PORT || 3000;

app.use(express.static(servePath));

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});
