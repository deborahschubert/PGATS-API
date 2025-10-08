const request = require('supertest');
const { expect } = require('chai');

describe('Transfer External', () => {
    describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexistentes recebo 404', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/transfer')
                .send({ 
                    from: "Deborah",
                    to: "Flavio",
                    amount: 100
                });

            expect(resposta.status).to.equal(404);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.');   
        });
     });   
});