import { Router } from "express";

import { 
    IndexView, 
    NosotrosView, 
    TestimonialesView, 
    ViajesView } from "../../middlewares/views/views.mw.js";

export const ViewsRouter = Router();

ViewsRouter.get('/', IndexView);
ViewsRouter.get('/nosotros', NosotrosView);
ViewsRouter.get('/viajes', ViajesView);
ViewsRouter.get('/testimoniales', TestimonialesView);