const express = require('express');

// buat object express
const app = express();

// menggunakan midleware
app.use(express.json());

// definisikan route
const router = require('./routes/api.js');
app.use(router);

// definisikan port
app.listen(3000, () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});