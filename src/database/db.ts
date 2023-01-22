import pkg from "pg";
// import dotenv from "dotenv";
// dotenv.config();

const {Pool} = pkg;

const dbconnection = new Pool({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'postgres',
    database:'poc_ts_db'
});

export default dbconnection;


// host:process.env.POSTGRES_HOST,
// port:process.env.POSTGRES_PORT,
// user:process.env.POSTGRES_USERNAME,
// password:process.env.POSTGRES_PASSWORD,
// database:process.env.POSTGRES_DATABASE