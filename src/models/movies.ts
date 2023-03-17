import mongoose from "mongoose";
import { AMovie } from "../types/movies/movie.type";
const { Schema } = mongoose;

const movieSchema = new Schema<AMovie>({
  Title: {
    type: String,
    unique: true,
  },
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Ratings: {
    type: Array<{ Source: String; Value: String }>,
    default: [],
  },
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  totalSeasons: String,
  Response: String,
  Error: String,
});

const MovieModel = mongoose.model("Movie", movieSchema);

export default MovieModel;
