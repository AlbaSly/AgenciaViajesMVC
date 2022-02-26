import { validationResult } from "express-validator";
import TestimonialesController from "../../controllers/testimoniales.controller.js";

export function CrearTestimonio(req, res) {
    const testimonioController = new TestimonialesController();
    const testimonio = req.body;

    const {errors} = validationResult(req);
    
    (async () => {
        try {
            if (errors.length) {
                const listadoTestimoniales = await testimonioController.ListadoTestimoniales();
                
                res.render('Testimoniales', {
                    errors,
                    nombre: req.body.nombre,
                    mensaje: req.body.mensaje,
                    listadoTestimoniales
                });
                return;
            } 

            await testimonioController.CrearTestimonio(testimonio);
            
            res.redirect('/testimoniales');
        } catch (error) {

        }
    })();
}