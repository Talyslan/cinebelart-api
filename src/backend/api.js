import { Movie } from './classe/classe-movie.js'
import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => console.log(`Starting server on port ${port}`));


// const movies = [
//     new Movie(1, "La La Land", "Damien Chazelle", 2017, "https://photos.app.goo.gl/MMHVDmUTkjbWBCJz8"),
//     new Movie(2, "Killers of the Flower Moon", "Martin Scorsese", 2023, "https://photos.app.goo.gl/vKtkuzSmeK6vhSFA7")
// ];

const moviesList = [{
    id: 1,
    title: "La La Land",
    director: "Damien Chazelle",
    releaseYear: 2017,
    poster: "https://photos.app.goo.gl/MMHVDmUTkjbWBCJz8"
}];

// Method: GET
app.get('/movie', (req, res) => res.send({moviesList}));

app.get('/movie/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = moviesList.find(movie => Number(movie.id) === Number(movieId));

    if (!movie) {
        return res.send("Movie not found!");
    }
    else {
        res.send(movie);
    }
});

// Method: POST
app.post('/movie');

// Method: PUT
// Method: DELETE