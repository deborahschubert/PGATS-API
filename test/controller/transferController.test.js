const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const transferService = require('../../service/transferService');

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

        it('Usando Mocks: Quando informo remetente e destinatario inexistentes recebo 404', async () => {
            const transferServiceMock = sinon.stub(transferService, 'createTransfer');
            transferServiceMock.returns({ error: 'Usuário remetente ou destinatário não encontrado.', status: 404 });
            
            const resposta = await request(app)
                .post('/transfer')
                .send({ 
                    from: "Deborah",
                    to: "Flavio",
                    amount: 1000
                });

            expect(resposta.status).to.equal(404);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.');   
            
            sinon.restore();
        });

        it('Usando Mocks: Quando informo dados válidos recebo 201', async () => {
            const mockTransfer = { from: "Deborah", to: "Flavio", amount: 100, date: new Date() };
            const transferServiceMock = sinon.stub(transferService, 'createTransfer');
            transferServiceMock.returns({ transfer: mockTransfer, status: 201 });

            const resposta = await request(app)
                .post('/transfer')
                .send({ 
                    from: "Deborah",
                    to: "Flavio",
                    amount: 100
                });

            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('from', 'Deborah');
            expect(resposta.body).to.have.property('to', 'Flavio');
            expect(resposta.body).to.have.property('amount', 100);

            sinon.restore();
            });
        });
    });
