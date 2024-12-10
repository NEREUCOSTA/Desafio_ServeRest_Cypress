import login from '../../../Pages/FrontEnd/indexlogin/login'
import carrinho from '../../../Pages/FrontEnd/indexCarrinho/carrinho'


describe('Adicionar Carrinho', () => {
   beforeEach(() => {
    cy.visit('/');
    login.preencherEmail()
    login.preencherSenha()
    login.clicarEntar()
   })
   it('adicionando produto no carrinho', () => {
    carrinho.selecionarProduto()
    carrinho.adicionarCarrinho()
    carrinho.verificarCarrinho()
        
   })
})