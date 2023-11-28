describe("Alura Pic, login correto", () => {
    // antes deve fazer o cadastro correto
    beforeEach(() => {
        cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
    })

    it("Deve efetuar o login com sucesso ao usar uma conta existente no banco de dados", () => {
        cy.get(`[data-test="loginUserName"]`).type("mateusmoraes");
        cy.get(`[data-test="loginPassword"]`).type("mateusmoraes7");

        cy.get(`[data-test="loginBtn"]`).click();
    })
})