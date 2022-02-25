import TestimonialesController from "../../controllers/testimoniales.controller.js";
import ViajesController from "../../controllers/viajes.controller.js";

export function IndexView(req, res) {
    const viajeController = new ViajesController();
    const testimonioController = new TestimonialesController();
    (async () => {
        try {
            const [listadoViajes, listadoTestimoniales] = await Promise.all([
                viajeController.ListadoViajes({limit: 3}),
                testimonioController.ListadoTestimoniales({limit: 3})
            ]);
            res.render('Index', {
                nombrePagina: 'Inicio',
                styleclass: 'home',
                listadoViajes,
                listadoTestimoniales
            });
        } catch (error) {
            res.send(error);
        }
    })();
}

export function NosotrosView(req, res) {
    res.render('Nosotros', {
        nombrePagina: 'Nosotros'
    });
}

export function ViajesView(req, res) {
    const viajeController = new ViajesController();
    (async () => {
        try {
            const listadoViajes = await viajeController.ListadoViajes();
            
            res.render('Viajes', {
                nombrePagina: 'Próximos Viajes',
                listadoViajes
            });
        } catch (error) {
            res.send(error);
        }
    })();
}

export function VerViajeView(req, res) {
    const viajeController = new ViajesController();
    (async () => {
        const viaje = {
            slug: req.params.url
        }

        try {   
            const viajeFound = await viajeController.VerViaje(viaje);

            res.render('Viaje', {
                nombrePagina: `Viaje a ${viaje.titulo}`,
                viajeFound
            })
        } catch (error) {
            res.render('NotFound', {
                nombrePagina: 'Viaje no encontrado',
                msg: `Viaje no encontrado`
            });
        }
    })();
}

export function TestimonialesView(req, res) {
    const testimonioController = new TestimonialesController();
    (async () => {
        try {
            const listadoTestimoniales= await testimonioController.ListadoTestimoniales();

            res.render('Testimoniales', {
                nombrePagina: 'Testimoniales',
                listadoTestimoniales
            });
        } catch (error) {
            res.send(error);
        }
    })();
}

export function NotFoundView(req, res) {
    res.status(404).render('NotFound', {
        nombrePagina: 'No encontrado'
    });
}