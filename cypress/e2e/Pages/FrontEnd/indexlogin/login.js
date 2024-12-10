// ação do cypress

class LoginPage{

    preencherEmail(){
        cy.get('[data-testid="email"]').type(Cypress.env('user_email'))
        

    }

    preencherSenha(){
        cy.get('[data-testid="senha"]').type(Cypress.env('user_password'))

    }

    clicarEntar(){
        cy.get('[data-testid="entrar"]').contains('Entrar').click()

    }
    logar(){
        cy.get('[data-testid="email"]').type('xfaj@emailteste.com')
        cy.get('[data-testid="senha"]').type('1234')
        cy.get('[data-testid="entrar"]').contains('Entrar').click()
    
    }
} export default new LoginPage;