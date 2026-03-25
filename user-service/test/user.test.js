const request = require('supertest');
const app = require('../src/index');

describe('User Service Tests', () => {
    it('should fetch a user by ID', async () => {
        const response = await request(app).get('/users/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('name', 'John Doe');
    });

    it('should return 404 for non-existent user', async () => {
        const response = await request(app).get('/users/999');
        expect(response.statusCode).toBe(404);
    });
});

