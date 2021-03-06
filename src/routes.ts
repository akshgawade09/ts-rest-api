import {Express, Request, Response} from "express";
import { createUserSessionHandler, getUserSessionHandler } from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import { validateResource } from "./middlewares/validate-resource";
import { createSessionSchema } from "./schemas/session.schema";
import { createUserSchema } from "./schemas/user.schema";

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200);
    })

    app.post("/api/users", validateResource(createUserSchema), createUserHandler);

    app.post("/api/sessions", validateResource(createSessionSchema), createUserSessionHandler);
    app.get("/api/sessions/", getUserSessionHandler);
}

export default routes;