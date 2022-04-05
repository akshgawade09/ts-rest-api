import {Request, Response} from "express";
import { createSession } from "../services/session.service";
import { validatePassword } from "../services/user.service";
import { signJWT } from "../utils/jwt";
import config from "config";
import logger from "../utils/logger";

export async function createUserSessionHandler(req: Request, res: Response) {
    try {
        // Validate User Password
        const user: any = await validatePassword(req.body);
        
        if (!user) {
            res.status(401).send({message: "Invalid Email or Password."});
        }

        // Create Session
        const session = await createSession(user._id, req.get("user-agent") || "");
        
        // Create Access Token
        const accessToken = signJWT(
            {...user, session: session._id},
            { expiresIn: config.get("accessTokenTtl") }
        );
        
        // Create Refresh Token
        const refreshToken = signJWT(
            {...user, session: session._id},
            { expiresIn: config.get("refreshTokenTtl") }
        );
        
        // Return Access & Refresh Token
        res.send({accessToken, refreshToken});
    } catch (error: any) {
        logger.error(error);
        res.status(409).send(error.message);
    }
}