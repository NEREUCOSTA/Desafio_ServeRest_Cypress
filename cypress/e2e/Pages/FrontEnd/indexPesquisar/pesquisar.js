
class pesquisar{
    
    fazerPesquisa(){
        cy.get('[data-testid="pesquisar"]').type('mouse')
        
    }

    clicarBotaoPesquisar(){
        cy.get('[data-testid="botaoPesquisar"]').click()
    }

    validarProduto(){
        cy.get(':nth-child(1) > .card-body > .card-title').should('be.visible')
    }
   

} export default new pesquisar;