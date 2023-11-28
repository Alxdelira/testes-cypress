describe('Alura Pic, cadastro correto', () => {

  beforeEach(() => {
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home/signup")
  })

  // Se testar denovo vai dar erro pois o usuario ja existe, mais deu certo !

  it("Deve preencher os campos e realizar o cadastro", () => {
    cy.get(`[data-test="email"]`).type("mateus@gmail.com");
    cy.get(`[data-test="fullName"]`).type("Mateus Moraes");
    cy.get(`[data-test="registerUserName"]`).type("mateusmoraes")
    cy.get(`[data-test="registerPassword"]`).type("mateusmoraes7");

    setTimeout(() => {
      cy.get(`[data-test="btnRegister"]`).click();
  },1000)
  })
})