import { Movie } from './classe/classe-movie.js'
import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => console.log(`Starting server for api on port ${port}`));


app.get('/', (req, res) => {
    const movies = [
        new Movie(1 ,"Inception", "Christopher Nolan", 2010),
        // new Movie(2, "La La Land", "Damien Chazelle", 2017),
        // new Movie(3, "Killers of the Flower Moon", "Martin Scorsese", 2023)
    ];

    // Serializar os objetos para JSON antes de enviar a resposta
    const serializedMovies = movies.map(movie => {
        return {
            id: movie.getId(),
            title: movie.getTitle(),
            director: movie.getDirector(),
            releaseYear: movie.getReleaseYear()
        }
    });

    res.send({serializedMovies});
});