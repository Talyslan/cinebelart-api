import express from 'express';
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://talyslancpc:F0eJDX7rSmVKCcZn@cinebelart-api.oilrfff.mongodb.net/?retryWrites=true&w=majority');
//F0eJDX7rSmVKCcZn

const app = express();
app.use(express.json());
const port = 3000;

const FilmSchema = new mongoose.Schema({
  id: Number,
  title: String,
  director: String,
  releaseYear: Number,
});

const Film = mongoose.model('Film', FilmSchema);

// Method: GET
app.get('/movie', async(req, res) => {
  const movie = await Film.find();
  res.json(movie);
});

app.get('/movie/:id', async(req, res) => {
  const movie = await Film.findById(req.params.id);
  res.json(movie);
});

// Method: POST
app.post('/movie', async(req, res) => {
  const movie = new Film({
    id: Number(req.body.id),
    title: req.body.title,
    director: req.body.director,
    releaseYear: Number(req.body.releaseYear),
  });
  
  await movie.save();
  res.json(movie);
});

// Method: PUT
app.put('/movie/:id', async(req, res) => {
  const movie = await Film.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    director: req.body.director,
    releaseYear: req.body.releaseYear,
    poster: req.body.poster
  }, { new: true });
  res.json(movie);
})

// Method: DELETE
app.delete('/movie/:id', async(req, res) => {
  const movie = await Film.findByIdAndRemove(req.params.id);
  res.json(movie);
})

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});