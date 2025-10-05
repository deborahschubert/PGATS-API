const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../app');

describe('Transer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexistentes recebo 404', async () => {
            const resposta = await request(app)
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

})
