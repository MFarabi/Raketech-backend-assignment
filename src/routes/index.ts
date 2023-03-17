import { Router } from "express";
const router: Router = Router();

import movieRouter from "./movie";
router.use("/v1/movies", movieRouter);

export default router;
