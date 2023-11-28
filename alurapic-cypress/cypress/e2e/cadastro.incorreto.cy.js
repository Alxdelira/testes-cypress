describe('Alura Pic, cadastro incorreto', () => {

    beforeEach(() => {
        cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home/signup")
    })


    it("Deve dar erro ao tentar cadastro um usuário já existente e mostrar uma mensagem de erro", () => {
        cy.get(`[data-test="email"]`).type("mateus@gmail.com");
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes");
        cy.get(`[data-test="registerUserName"]`).type("mateusmoraes")
        cy.get(`[data-test="registerPassword"]`).type("mateusmoraes7");

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Username already taken");
    })

    it("Deve dar erro ao tentar cadastrar com a senha menor do que 8 caracteres e mostrar uma mensagem de erro", () => {
        cy.get(`[data-test="email"]`).type("mateus@gmail.com");
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes");
        cy.get(`[data-test="registerUserName"]`).type("mateus")
        cy.get(`[data-test="registerPassword"]`).type("mateus");

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Mininum length is 8");
    })

    it("Deve dar erro ao tentar cadastrar com a senha menor do que 15 caracteres e mostrar uma mensagem de erro", () => {
        cy.get(`[data-test="email"]`).type("mateus@gmail.com");
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes");
        cy.get(`[data-test="registerUserName"]`).type("mateus")
        cy.get(`[data-test="registerPassword"]`).type("123123123123123");

        cy.get(`[data-test="btnRegister"]`).click();

        // Lá está sendo mostrado que é 18, poré é 15.
        cy.contains("Maximun length is 18");
    })

    it("Deve dar erro ao tentar cadastrar o usuário com o campo de senha vazio e mostrar uma mensagem erro", () => {
        cy.get(`[data-test="email"]`).type("mateus@gmail.com");
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes");
        cy.get(`[data-test="registerUserName"]`).type("mateus")
        cy.get(`[data-test="registerPassword"]`)

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Password is required!");
    })

    it("Deve dar erro ao tentar cadastrar o usuário com o campo de usuário vazio e mostra uma mensagem de erro", () => {
        cy.get(`[data-test="email"]`).type("mateus@gmail.com");
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes");
        cy.get(`[data-test="registerUserName"]`)
        cy.get(`[data-test="registerPassword"]`).type("123451231")

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("User name is required!");
    })

    it("Deve dar erro ao tentar cadastrar o usuário com o campo de email vazio e mostrar uma mensagem de erro", () => {
        cy.get(`[data-test="email"]`)
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes");
        cy.get(`[data-test="registerUserName"]`).type("mateus")
        cy.get(`[data-test="registerPassword"]`).type("123451231")

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Email is required!");
    })

    it("Deve dar erro ao tentar cadastrar o usuário com o campo de nome completo vazio e mostrar uma mensagem de erro", () => {
        cy.get(`[data-test="email"]`).type("mateu@gmail.com")
        cy.get(`[data-test="fullName"]`)
        cy.get(`[data-test="registerUserName"]`).type("mateus")
        cy.get(`[data-test="registerPassword"]`).type("12345123")

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Full name is required!");
    })

    it("Deve dar erro ao tentar cadastrar um usuario que já existe no banco de dados", () => {
        cy.get(`[data-test="email"]`).type("mateus@gmail.com")
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes")
        cy.get(`[data-test="registerUserName"]`).type("mateusmoraes")
        cy.get(`[data-test="registerPassword"]`).type("mateusmoraes7")

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Username already taken");
    })

    it("Deve dar erro ao cadastrar com os campos todos vazios", () => {
        cy.get(`[data-test="email"]`).focus()
        cy.get(`[data-test="fullName"]`).focus()
        cy.get(`[data-test="registerUserName"]`).focus()
        cy.get(`[data-test="registerPassword"]`).focus()

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Email is required!")
        cy.contains("Full name is required!")
        cy.contains("User name is required!")
        cy.contains("Password is required!")
    })

    it("Erro ao ao tentar cadastrar um usuario passando um email inválido", () => {
        cy.get(`[data-test="email"]`).type("maria.com")
        cy.get(`[data-test="fullName"]`).type("Mateus Moraes")
        cy.get(`[data-test="registerUserName"]`).type("mateusmoraes6")
        cy.get(`[data-test="registerPassword"]`).type("mateusmoraes7")

        cy.get(`[data-test="btnRegister"]`).click();

        cy.contains("Invalid e-mail")
    })


})