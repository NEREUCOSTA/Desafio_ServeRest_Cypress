
describe('Login API Test', () => {
    it('Deve realizar login com sucesso', () => {
        cy.api({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                email: 'fulanoss@qa.com.br',
                password: 'teste'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Login realizado com sucesso');
        });
    });
});
