import * as dotenv from "dotenv";
dotenv.config();

export const __prod__ = process.env.NODE_ENV === "production";
export const SERVER_PORT = process.env.SERVER_PORT || '';
export const SERVER_HOST = process.env.SERVER_HOST || '';