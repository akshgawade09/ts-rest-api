import {Request, Response} from "express";
import logger from "../utils/logger";
import { createUser } from "../services/user.service";
import { CreateUserInput } from "../schemas/user.schema";
import { omit } from "lodash";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try {
        const user = await createUser(req.body);
        res.status(200).send({
            message: "User created successfully.",
            data: user
        });
    } catch (error: any) {
        logger.error(error);
        res.status(409).send(error.message);
    }
}