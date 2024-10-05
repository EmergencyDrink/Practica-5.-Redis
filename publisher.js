const redis = require('redis');
const prompt = require('prompt-sync')(); // Paquete para la entrada del usuario

// Configuración de Redis
const redisHost = 'redis-12503.c279.us-central1-1.gce.redns.redis-cloud.com';
const redisPort = 12503;
const redisPassword = 'y9el8YjGeO3227oxPu3OcQKZwK87TdD3';

// Conexión al cliente de Redis
const publisher = redis.createClient({
    host: redisHost,
    port: redisPort,
    password: redisPassword,
});

// Manejo de errores
publisher.on('error', (err) => {
    console.error('Error de Redis:', err);
});

// Publicador
const publishMessages = () => {
    setInterval(() => {
        const message = prompt('Hola, este es un mensaje de prueba enviado desde el publicador de Redis.');
        publisher.publish('canal_prueba', message, () => {
            console.log(`Publicado: ${message}`);
        });
    }, 1000); // Publica un mensaje cada segundo
};

publishMessages();
