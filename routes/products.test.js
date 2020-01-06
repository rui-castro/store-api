const request = require('supertest');
const app = require('../app');

describe('Products endpoints', () => {

    it('should get all products', async () => {

        return request(app)
            .get('/products')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).toBe(3);

                testProduct(response.body[0], {
                    id: 1,
                    name: 'Lego Creator: Underwater Robot',
                    price: 19.99,
                    description: 'Lego Creator: Underwater Robot - 31090 - 7+'
                });

                testProduct(response.body[1], {
                    id: 2,
                    name: 'Lego Creator: Deep Sea Creatures',
                    price: 14.99,
                    description: 'Lego Creator: Deep Sea Creatures - 31088 - 7+'
                });

                testProduct(response.body[2], {
                    id: 3,
                    name: 'Lego Creator: Dune Buggy',
                    price: 12.99,
                    description: 'Lego Creator: Dune Buggy - 31087 - 6+'
                });
            });
    });

    function testProduct(received, expected) {
        expect(received.id).toBe(expected.id);
        expect(received.name).toBe(expected.name);
        expect(received.price).toBe(expected.price);
        expect(received.description).toBe(expected.description);
    }

});
