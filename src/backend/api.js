import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Exemple
let moviesList = [{
    id: 1,
    title: "La La Land",
    director: "Damien Chazelle",
    releaseYear: 2017,
    poster: "https://photos.app.goo.gl/MMHVDmUTkjbWBCJz8"
}];

// Method: GET
app.get('/movie', (req, res) => res.send(moviesList));

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
app.post('/movie', async(req, res) => {
    const lastMovie = moviesList[moviesList.length - 1];
    const lastId = lastMovie.id;
    
    moviesList.push({
        id: lastId + 1,
        title: req.body.title,
        director: req.body.director,
        releaseYear: req.body.releaseYear,
        poster: req.body.poster
    });

    res.send("Saved movie!");
});
    
// Method: PUT
app.put('/movie/:id', (req, res) => {
    const movieId = req.params.id
  
    const movie = moviesList.find(user => Number(user.id) === Number(movieId))
  
    if (!movie) {
      return res.send('Movie nor found!')
    }
  
    const updatedMovie = {
        ...movie,
        title: req.body.title,
        director: req.body.director,
        releaseYear: req.body.releaseYear,
        poster: req.body.poster
    }
  
    moviesList = moviesList.map(movie => {
      if (Number(movie.id) === Number(movieId)) {
        movie = updatedMovie;
      }
      return movie;
    })
  
    res.send("Updated movie!");
  })

// Method: DELETE
app.delete('/movie/:id', (req, res) => {
    const movieId = req.params.id;
  
    moviesList = moviesList.filter(movie => Number(movie.id) !== Number(movieId))
  
    res.send('Deleted movie!')
  })

app.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});