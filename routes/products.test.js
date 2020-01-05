const request = require('supertest');
const app = require('../app');

describe('Products endpoints', () => {

    it('should get all products', async () => {
        const res = await request(app)
            .get('/products');
        expect(res.statusCode).toEqual(200);
        // expect(res.body).toHaveProperty('post');
    })

});
