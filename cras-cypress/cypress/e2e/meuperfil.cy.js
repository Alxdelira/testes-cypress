describe("Meu Perfil", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev")

    cy.get(`#email`).type("cacinaldo.silva2013962469@gmail.com");
    cy.get("#senha").type("M@teus123");
    cy.get(`.styles_button__dr0t2`).click();
  })

  it("Deve alterar os campos e a senha", () => {
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/perfil"]').click()
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_button__dr0t2').click()
    cy.get("#senha").type("M@teus123");
    cy.get("#confirmarSenha").type("M@teus123")
    cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click()
    cy.contains("Senha alterada com sucesso")
  })

})