import MovieModel from "../../models/movies";
import { AMovie } from "../../types/movies/movie.type";

export async function insertMovie(movie: AMovie, supressDuplicate?: boolean) {
  try {
    const movieModel = new MovieModel(movie);
    return await movieModel.save();
  } catch (error: any) {
    if (error.code === 11000 && supressDuplicate) {
      return true;
    } else {
      throw error;
    }
  }
}
