import { TestimonialesRouter } from "./testimoniales/testimoniales.routes.js";
import { ViajesRouter } from "./viajes/viajes.routes.js";
import { ViewsRouter } from "./views/views.routes.js";

export const RouteDeclarations = [
    {
        path: '/',
        router: [
            ViewsRouter,
            ViajesRouter,
            TestimonialesRouter
        ]
    }
]