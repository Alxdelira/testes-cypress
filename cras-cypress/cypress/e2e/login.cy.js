describe('Login', () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev")
  })

  it("Deve realizar o login com sucesso", () => {
    cy.get(`#email`).type("dev@gmail.com");
    cy.get("#senha").type("123");
    cy.get(`.styles_button__dr0t2`).click();
  })

  it("Deve retornar mensagem de campos obrigatórios", () => {
    cy.get(`.styles_button__dr0t2`).click();
    cy.contains("O email é obrigatório");
    cy.contains("A senha é obrigatória")
  })

  it("Deve retornar mensagem de usuário ou senha inválida", () => {
    cy.get(`#email`).type("dev@gmail.com");
    cy.get("#senha").type("12324123");
    cy.get(`.styles_button__dr0t2`).click();

    cy.contains("Usuário ou Senha inválida!")
  })
})