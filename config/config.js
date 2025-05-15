require('dotenv').config();

module.exports = {
        PORT: process.env.PORT || 4001, 
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres' // o mysql, sqlite, etc.
};
