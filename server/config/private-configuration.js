// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Manejo de rutas de imagenes
// ============================
process.env.ROUTE_IMG_PRODUCTOS = 'http://localhost:3000/uploads/productos/';


// ============================
//  Vencimiento del token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = '48h';

// ============================
//  SEED de autenticacion
// ============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';