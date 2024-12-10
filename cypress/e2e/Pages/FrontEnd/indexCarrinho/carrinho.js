
class carrinho{
    selecionarProduto(){
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    }

    adicionarCarrinho(){
        cy.get('[data-testid="adicionar carrinho"]').click()
        
    }

    verificarCarrinho(){
        cy.get('[data-testid="carrinho"]').click()

    }
}  export default new carrinho;
