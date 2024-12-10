import login from '../../../Pages/FrontEnd/indexlogin/login'


describe('Acessar o Front Server Rest', () => {
    context('Context', () => {
        // code here

        beforeEach(() => {
            cy.visit('/login')
            
        })
       
        it('Login no Frontend Server', () => {
           login.preencherEmail()
           login.preencherSenha()
           login.clicarEntar()
           
        })
    
     })
})