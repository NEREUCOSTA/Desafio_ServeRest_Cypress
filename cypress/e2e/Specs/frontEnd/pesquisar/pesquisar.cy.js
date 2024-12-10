import login from '../../../Pages/FrontEnd/indexlogin/login'
import pesquisar from '../../../Pages/FrontEnd/indexPesquisar/pesquisar'

describe('Fazer uma busca', () => {
   beforeEach(() => {
       cy.visit('/');
       login.preencherEmail()
       login.preencherSenha()
       login.clicarEntar()
   })
   it('realizar busca de produto', () => {
       pesquisar.fazerPesquisa()
       pesquisar.clicarBotaoPesquisar()
       pesquisar.validarProduto()
   })
})