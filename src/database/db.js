import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const {Pool} = pkg;

const dbconnection = new Pool({
    host:process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
    user:process.env.POSTGRES_USERNAME,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DATABASE
});

export default dbconnection;