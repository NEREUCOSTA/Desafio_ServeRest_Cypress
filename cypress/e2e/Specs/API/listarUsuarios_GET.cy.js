
describe('Testes de API - Usuários', () => {
    it('Deve buscar a lista de usuários com sucesso', () => {
        cy.api({
            method: 'GET',
            url: '/usuarios',
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
