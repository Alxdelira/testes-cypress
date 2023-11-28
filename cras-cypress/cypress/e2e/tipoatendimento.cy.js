import fake from "faker-br";


var fakeNome = fake.name.firstName();


describe('Tipo de atendimento', () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev")

    cy.get(`#email`).type("adelson.moreira7293298820@gmail.com");
    cy.get("#senha").type("123");
    cy.get(`.styles_button__dr0t2`).click();

  })

  it("Deve cadastrar tipo de atendimento com todos os campos preechidos", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.get(":nth-child(3) > .styles_container__NSLBw > #buscar").click()
    cy.get("#nome").type(fakeNome);
    cy.get('[type="submit"]').click()
    cy.get(".styles_warning__6QZnN").click();
  })

  it("Deve retornar mensagem de campos obrigatórios", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.get(":nth-child(3) > .styles_container__NSLBw > #buscar").click()
    cy.get('[type="submit"]').click();
    cy.contains("Nome é obrigatório")
    cy.wait(1000) 
    cy.get(".styles_warning__6QZnN").click();
  })

  it("Deve pesquisar um tipo de atendimento e alterar seu nome", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.get("#tipo").type(fakeNome)
    cy.get(":nth-child(2) > .styles_container__NSLBw > #buscar").click();
    cy.get('[alt="Editar tipo de atendimento"]').click()
    cy.get("#nome").type(fakeNome + fakeNome);
    cy.get('[type="submit"]').click()
  })

})