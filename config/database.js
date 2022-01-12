// import database db
const mysql = require('mysql');

// import dotenv
require('dotenv').config();

// buat koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// koneksikan ke database db
db.connect((err) => {
    if (err) {
        console.log(`koneksi error ${err}`);
        return;
    } else {
        console.log(`koneksi berhasil`);
        return;
    }
});

// export db
module.exports = db;