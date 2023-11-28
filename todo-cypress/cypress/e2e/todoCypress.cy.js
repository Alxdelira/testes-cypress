/// <reference types="cypress" />

describe('template spec', () => {

  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo")
  })

  it("Deve encontrar as tarefas padrão", () => {
    cy.get(".todo-list li").should("have.length", 2);
    cy.get(".todo-list li").first().should('have.text', 'Pay electric bill');
    cy.get(".todo-list li").last().should('have.text', 'Walk the dog');
  })

  it("Deve cadastrar uma nova tarefa", () => {
    let tarefa = "Fazer tela manutenção";
    cy.get(".new-todo").type(`${tarefa} {enter}`);
  })

  it("Deve cadastrar uma nova tarefa e marcar como concluida", () => {
    cy.get(".new-todo").type("Fazer tela manutenção {enter}");
    cy.contains('Fazer tela manutenção').parent().find('input[type=checkbox]').check();
  })

  context("Usando uma tarefa verificada", () => {

    beforeEach(() => {
      cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();
    })

    it("Deve filtrar as tarefas incompletas", () => {
      cy.contains("Active").parent().find('a').click();
      cy.contains("Walk the dog");
      cy.contains("Pay electric bill").should("not.exist");
    })

    it("Deve filtrar as tarefas completas", () => {
      cy.contains("Completed").parent().find('a').click();
      cy.contains("Pay electric bill");
      cy.contains("Walk the dog").should("not.exist");
    })

    it("Deve limpar tdoas as tarefas concluidas", () => {
      cy.contains("Clear completed").parent().find('button').click();
      cy.contains("Completed").parent().find('a').click();
      cy.get(".todo-list").should("have.length", 1);
      cy.contains("Clear completed").should("not.exist");
    })
  

  })
 
})