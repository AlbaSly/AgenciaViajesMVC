import { Router } from "express";
import { CrearTestimonio } from "../../middlewares/testimoniales/testimoniales.mw.js";
import TestimonialesValidator from "../../validations/testimoniales.validator.js";

export const TestimonialesRouter = Router();

TestimonialesRouter.post('/crear-testimonio', TestimonialesValidator.CrearTestimonioRules(), CrearTestimonio);