import pg from 'pg';
const {Pool} = pg;

// let localPoolConfig = {
//     users:'postgres',
//     password:'test',
//     host:'localhost',
//     port:5432,
//     database:'jwtauthentication',
// };

// const poolConfig = process.env.DATABASE_URL ? {
//     connectionString:process.env.DATABASE_URL,
//     ssl:{ rejectUnauthorized: false }
// } : localPoolConfig;

// const pool = new Pool(poolConfig);
// export default pool;

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database: "jwtauthentication",
    password: "test",
    port: 5432,
});

export default pool;
