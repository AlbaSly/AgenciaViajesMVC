import { Router } from "express";

import { VerViajeView } from "../../middlewares/views/views.mw.js";

export const ViajesRouter = Router();

ViajesRouter.get('/viajes/:url', VerViajeView);