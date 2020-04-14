const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll( async () => {
        await connection.destroy();
    });

    it('É possivel a criar uma nova ONG', async() => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "ONg Validação",
            email: "vcovid@email.com",
            whatsapp:"11992741577",
            city:"RJ",
            uf:"RJ"
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});