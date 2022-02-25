import { WEB_SERVER } from "../server/Server.js";
import { RouteDeclarations } from "./routes.index.js";
import { NotFoundView } from "../middlewares/views/views.mw.js";        

export class Routes {
    constructor() {
        this.EnableRoutes();
    }
    EnableRoutes() {
        //Verificar que nuestra instancia está existente
        if (WEB_SERVER) {
            RouteDeclarations.forEach(routeDec => {
                WEB_SERVER.use(routeDec.path, routeDec.router);
            });
        }
        this.Load404Route();
    }
    Load404Route() {
        WEB_SERVER.use('*', NotFoundView);
    }
}