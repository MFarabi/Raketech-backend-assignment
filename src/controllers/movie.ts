import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { insertMovie } from "../data-access/movie/insert-movie.db";
import redisClient from "../services/database/redis";
import { AMovie } from "../types/movies/movie.type";
import api from "../utils/axios/instance.axios";

export async function search(req: Request, res: Response) {
  try {
    validationResult(req).throw();
    const query = req.query.all as string;
    const result = await api.get<AMovie>(query);
    const requests: Array<Promise<any>> = [];

    requests.push(redisClient.set(query, JSON.stringify(result.data), { EX: 60 * 60 * 24 }));

    if (!result.data.Error) {
      requests.push(insertMovie(result.data, true));
    }

    await Promise.all(requests);
    res.json(result.data);
  } catch (err) {
    res.status(400).json(err);
  }
}
