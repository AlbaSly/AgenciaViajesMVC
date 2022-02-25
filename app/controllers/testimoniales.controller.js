import TestimonialesModel from "../models/Testimoniales.model.js";

export default class TestimonialesController {
    constructor() {}

    CrearTestimonio(testimonio) {
        return new Promise(async (resolve, reject) => {
            try {
                await TestimonialesModel.create(testimonio);

                resolve('Testimonio creado');
            } catch (error) {
                reject({
                    msg: 'Ocurrió un error al crear el Testimonio',
                    error
                });
            }
        });
    }

    ListadoTestimoniales(options) {
        return new Promise(async (resolve, reject) => {
            try {
                const listadoTestimoniales = await TestimonialesModel.findAll({
                    ...options,
                    order: [
                        ['id', 'DESC']
                    ]
                });

                resolve(listadoTestimoniales);
            } catch (error) {
                reject({
                    msg: 'Ocurrió un error al consultar los Testimoniales'.
                    error
                });
            }
        });
    }
}