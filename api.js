const express = require('express');
const app = express();
const port = 80;
app.use(express.json());

const movies = [
    {

    }
];

app.get('/', (req, res) => {
    res.send(movies)
});

app.listen(port, () => console.log(`Starting server for api on port ${port}`));