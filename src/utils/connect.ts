import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

module.exports.connect = () => {
    const dbURI = config.get<string>("dbURI");
    return mongoose.connect(dbURI).then(() => {
        logger.info("DB Connected.");
    })
    .catch((error) => {
        logger.error("DB Connection Failed.");
        process.exit(1);
    });
}