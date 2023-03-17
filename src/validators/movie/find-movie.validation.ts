import { check } from "express-validator";
import MovieTypeEnum from "../../types/movies/movie-type.enum";

const validation = [
  check("t").isString().trim().notEmpty().withMessage("Title must not be empty"),
  check("y").toInt().isInt({ gt: 0 }).withMessage("year in not match"),
  check("type")
    .isIn(Object.keys(MovieTypeEnum))
    .withMessage(`type must be in ${Object.keys(MovieTypeEnum).join(", ")}`),
];

export default validation;
