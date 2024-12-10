describe('LIstar produtos Cadastrados', () => {

    context('Dado que é feito uma requisiçao GET para o endpoint /produtos', () => {
        // code here


        it('Listados com sucesso', () => {
            cy.api('/produtos')
                .then((response) => {
                    expect(response.status).to.have.eq(200);
                    expect(response.body).not.to.be.empty

                    expect(response.body.produtos[0].nome).to.eq("Recycled Frozen Chips--457577")

                });

        })


    })
})