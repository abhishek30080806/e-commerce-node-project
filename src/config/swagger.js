import { authSwagger } from '../swagger/auth.swagger.js'; // Import the named export
import { orderSwagger } from '../swagger/order.swagger.js';
import { productSwagger } from '../swagger/product.swagger.js';
import { reviewSwagger } from '../swagger/review.swagger.js';
import { userSwagger } from '../swagger/user.swagger.js';

const swaggerSpec = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API documentation for the application',
    },
    paths: {
        ...authSwagger.paths, // Combine auth Swagger paths
        ...userSwagger.paths,
        ...productSwagger.paths,
        ...reviewSwagger.paths,
        ...orderSwagger.paths,
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};

export default swaggerSpec;