import express from "express";
import DB from "../config/database.js";
/*ROUTES*/
import { Routes } from "../routes/Routes.js";
/*GLOBALES*/
export let WEB_SERVER;

export class Server {
    constructor() {
        this.WebService();
    }
    WebService() {
        
        (async () => {
            WEB_SERVER = express();

            try {
                const dbResponse = await this.ConnectDB();
                console.log(dbResponse);
            } catch (error) {
                console.log(error);
            }
            
            this.LoadPublic();
            this.LoadViews();
            this.EnableTemplateEngine();
            this.EnableBodyParser();
            this.LoadUtilities();

            this.LoadRoutes();
            this.InitializeServer();
        })();
    }
    ConnectDB() {
        return new Promise(async (resolve, reject) => {
            try {
                this.LoadModels();
                await DB.authenticate();

                resolve('BASE DE DATOS CONECTADA', DB);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }
    EnableBodyParser() {
        WEB_SERVER.use(express.urlencoded({extended: true}));
        WEB_SERVER.use(express.json());
    }
    EnableTemplateEngine() {
        WEB_SERVER.set('view engine', 'pug');
    }
    LoadPublic() {
        WEB_SERVER.use(express.static('./app/public'));
    }
    LoadModels() {
        console.log('Cargando Modelos');

        (async () => {
            await import('../models/Viajes.model.js');
        })();
    }
    LoadViews() {
        WEB_SERVER.set('views', './app/views');
    }
    LoadUtilities() {
        WEB_SERVER.use((req, res, next) => {
            res.locals.currentYear = new Date().getFullYear();
            res.locals.nombreSitio = 'Agencia de Viajes';
            
            next();
        });
    }
    LoadRoutes() {
        const routes = new Routes();
    }
    InitializeServer() {
        const PORT = process.env.PORT || 3200;
        const HOST = process.env.HOST || '0.0.0.0';

        WEB_SERVER.listen(PORT, HOST, () => {
            console.log(`SERVIDOR CONECTADO: ${HOST}:${PORT}`);
        });
    }
}