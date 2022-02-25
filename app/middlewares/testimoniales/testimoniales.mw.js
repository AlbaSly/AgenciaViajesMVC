import { validationResult } from "express-validator";
import TestimonialesController from "../../controllers/testimoniales.controller.js";

export function CrearTestimonio(req, res) {
    const testimonioController = new TestimonialesController();
    const testimonio = req.body;

    const {errors} = validationResult(req);

    if (errors.length) {
        res.render('Testimoniales', {
            errors,
            nombre: req.body.nombre,
            mensaje: req.body.mensaje
        });
        return;
    } 

    (async () => {
        try {
            await testimonioController.CrearTestimonio(testimonio);
            
            res.redirect('/testimoniales');
        } catch (error) {

        }
    })();
}