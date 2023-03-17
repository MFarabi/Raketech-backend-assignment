import express from "express";
import { findMovieCache } from "../cache/movie/find-movie.cache";
import { search } from "../controllers/movie";
import findMovieValidation from "../validators/movie/find-movie.validation";

const router = express.Router();

router.route("/find").get(findMovieValidation, findMovieCache, search);

export default router;
