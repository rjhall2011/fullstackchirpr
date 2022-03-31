import * as express from "express"
const router = express.Router();
import chirpsRouter from "./chirps";

// localhost:3000/api/chirps/
router.use("/chirps", chirpsRouter);

export default router;