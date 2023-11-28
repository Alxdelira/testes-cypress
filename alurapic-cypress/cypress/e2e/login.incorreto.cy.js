describe("Alura Pic, login incorreto", () => {
    beforeEach(() => {
        cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
    })

    it("Deve dar erro ao realizar login com uma conta que não existe no banco de dados", () => {
        cy.get(`[data-test="loginUserName"]`).type("mateusmoraess");
        cy.get(`[data-test="loginPassword"]`).type("mateusmoraes8");

        cy.on('window:alert', (t) => {
            expect(t).to.contains('Invalid user name or password');
        })

        cy.get(`[data-test="loginBtn"]`).click();
    })

    it("Deve dar erro ao tentar realizar login com o campo de usuario em branco", () => {
        cy.get(`[data-test="loginUserName"]`).focus();
        cy.get(`[data-test="loginPassword"]`).type("mateusmoraes8");

        cy.contains("User name is required!")

    })

    it("Deve dar erro ao tentar realizar login com o campo de senha em branco", () => {
        cy.get(`[data-test="loginUserName"]`).type("mataeras")
        cy.get(`[data-test="loginPassword"]`).focus()

        cy.contains("Password is required!")

    })

    it("Deve dar erro ao tentar realizar o login com ambos os campos vazios", () => {
        cy.get(`[data-test="loginUserName"]`).focus()
        cy.get(`[data-test="loginPassword"]`).focus()

        cy.contains("Password is required!")
        cy.contains("User name is required!")

    })


})