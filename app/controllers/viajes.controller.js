import ViajesModel from "../models/Viajes.model.js";

export default class ViajesController {
    constructor() {}

    ListadoViajes(options) {
        return new Promise(async (resolve, reject) => {
            try {
                const listadoViajes = await ViajesModel.findAll({
                    ...options
                });
                resolve(listadoViajes);
            } catch (error) {
                reject({
                    msg: 'Hubo un error al consultar el listado de viajes',
                    error
                });
            }
        });
    }

    VerViaje(viaje) {
        return new Promise(async (resolve, reject) => {
            try {
                const viajeFound = await ViajesModel.findOne({
                    where: {
                        ...viaje
                    }
                });

                if (!viajeFound) reject('No se ha encontrado el viaje');

                resolve(viajeFound);
            } catch (error) {
                reject({
                    msg: 'Hubo un error al consultar el viaje',
                    error
                })
            }
        });
    }

    EliminarViaje(viaje) {
        return new Promise(async (resolve, reject) => {
            try {
                const viajeFound = await ViajesModel.findOne({
                    where: {
                        ...viaje
                    }
                });

                if (!viajeFound) reject('No se ha encontrado el viaje a eliminar');

                await ViajesModel.destroy({
                    where: {
                        ...viaje
                    }
                });

                resolve('Tarea eliminada correctamente');
            } catch (error) {
                reject({
                    msg: 'Hubo un error al eliminar el viaje',
                    error
                })
            }
        });
    }
}