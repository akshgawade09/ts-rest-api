import express from "express";
const app = express();
import config from "config";
const port = config.get<number>("port");
const {connect} = require("../src/utils/connect");
import logger from "../src/utils/logger";
import routes from "./routes";

app.use(express.json());

app.listen(port, async () => {
	logger.info(`App is Up & Running at http://localhost:${port}.`);
    await connect();
    await routes(app);
});
