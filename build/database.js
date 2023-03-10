"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USERNAME, POSTGRES_PASSWORD } = process.env;
const client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DATABASE,
    user: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD
});
exports.default = client;
