import ViajesController from "../../controllers/Viajes.controller.js";

export function ListadoViajes(req, res) {
    const viajeController = new ViajesController();

    (async () => {
        try {
            const response = await viajeController.ListadoViajes();

            res.send(response);
        } catch (error) {
            res.end('Fail')
        }
    })();
}

export function VerViaje(req, res) {
    const viajeController = new ViajesController();

    (async () => {
        try {
            const response = await viajeController
        } catch (error) {
            res.send(error);
        }
    })();
}