import exValid, { body, checkSchema } from "express-validator";

export default class TestimonialesValidator {
    static CrearTestimonioRules() {
        return [
            body('email', 'Email Inválido')
                .isEmail()
                .trim(),
            body('email')
                .custom(value => {
                    if (!value) throw new Error('El Email no puede estar vacío');

                    return true;
                }),
            body('nombre', 'El nombre no puede estar vacío')
                .not().isEmpty()
                .trim(),
            body('mensaje', 'El mensaje no puede quedar vacío')
                .not().isEmpty()
                .trim()
        ];
    }

    static ActualizarTestimonioRules() {

    }
}