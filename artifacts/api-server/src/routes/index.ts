import { Router, type IRouter } from "express";
import healthRouter from "./health";
import storageRouter from "./storage";
import contactRouter from "./contact";
import brochuresRouter from "./brochures";

const router: IRouter = Router();

router.use(healthRouter);
router.use(storageRouter);
router.use(contactRouter);
router.use(brochuresRouter);

export default router;
