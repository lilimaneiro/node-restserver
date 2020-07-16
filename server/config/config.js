// ==================
// Puerto
// ==================

process.env.PORT = process.env.PORT || 3000;

// ==================
// Entorno
// ==================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ==================
// Base de datos
// ==================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://lilimaneiro:eMXkMBnf4IZmfNjW@cluster0.4u2lu.mongodb.net/coffee'
}

process.env.URLBD = urlDB;

// ==================
// Vencimiento del token
// ==================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ==================
// Seed de autenticación
// ==================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'