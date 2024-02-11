import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.DATABASE_URL);

const FilmSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseYear: Number,
  poster: String
});

export const Film = mongoose.model('Film', FilmSchema);