// /// <reference types="cypress" />
import fake from "faker-br"

describe("Atendimentos", () => {

  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev")

    cy.get(`#email`).type("adelson.moreira7293298820@gmail.com");
    cy.get("#senha").type("123");
    cy.get(`.styles_button__dr0t2`).click();
  })

  it("Deve alterar os dados do atendimento cadastrado", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();

    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click();

    cy.get('#observacaoAtendimento').type(fake.lorem.sentence());
    cy.get('[type="submit"]').click()
  })

  it("Deve retornar mensagem de onde data inicial é maior que data final", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();

    cy.get("#dataInicial").type("2023-08-23");
    cy.get("#dataFinal").type("2023-08-21");

    cy.get("#buscar").click();

    cy.contains("Data inicial não pode ser maior ou igual a data final")
  })

  it("Deve realizar busca somente pelo tipo de atendimento", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();

    cy.get("#tipo").select("Tipo Inova Brasil");

    cy.get("#buscar").click();
  })

  it("Deve realizar busca somente com as datas inicial e final", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();

    cy.get("#dataInicial").type("2023-08-21");
    cy.get("#dataFinal").type("2023-08-23");

    cy.get("#buscar").click();
  })

  it("Deve buscar tipo de atendimento e alterar os dados do atendimento", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();

    cy.get("#tipo").select("Tipo Inova Brasil");

    cy.get("#buscar").click();
    cy.wait(4000)
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click();

    cy.get('#observacaoAtendimento').type(fake.lorem.sentence());
    cy.get('[type="submit"]').click()
  })
})