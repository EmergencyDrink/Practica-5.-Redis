const redis = require('redis');

// Configuración de Redis
const redisHost = 'redis-12503.c279.us-central1-1.gce.redns.redis-cloud.com';
const redisPort = 12503;
const redisPassword = 'y9el8YjGeO3227oxPu3OcQKZwK87TdD3';

// Conexión al cliente de Redis
const subscriber = redis.createClient({
    host: redisHost,
    port: redisPort,
    password: redisPassword,
});

// Manejo de errores
subscriber.on('error', (err) => {
    console.error('Error de Redis:', err);
});

// Suscriptor
subscriber.subscribe('canal_prueba', (err, count) => {
    if (err) {
        console.error('Error al suscribirse:', err);
    } else {
        console.log(`Suscrito a ${count} canal(es)`);
    }
});

// Manejo de mensajes
subscriber.on('message', (channel, message) => {
    console.log(`Recibido en ${channel}: ${message}`);
});
