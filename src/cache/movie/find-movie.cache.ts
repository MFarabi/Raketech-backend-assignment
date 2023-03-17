import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import redisClient from "../../services/database/redis";
export async function findMovieCache(req: Request, res: Response, next: NextFunction) {
  try {
    validationResult(req).throw();
    const parameters = Object.keys(req.query);
    const query = `?${parameters.map((item) => `${item}=${req.query[item]}`).join("&")}`;
    req.query["all"] = query;
    const inCache = await redisClient.get(query);
    if (inCache) {
      res.json(JSON.parse(inCache));
    } else if (!inCache) {
      next();
    }
  } catch (error: any) {
    if (error.errors) {
      res.status(400).json(error.errors);
    } else {
      next();
    }
  }
}
