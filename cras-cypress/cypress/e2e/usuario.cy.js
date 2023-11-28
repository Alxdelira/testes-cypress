import fake from "faker-br"

var fakeNome = fake.name.firstName()

describe("Testes no cadastro de usuário", () => {

  context("Testes na tela de cadastro", () => {
    beforeEach(() => {
      cy.visit("https://front-cras.app.fslab.dev")

      cy.get(`#email`).type("adelson.moreira7293298820@gmail.com");
      cy.get("#senha").type("123");
      cy.get(`.styles_button__dr0t2`).click();

      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.get(":nth-child(5) > .styles_button__dr0t2").click()
    })
    it("Deve realizar o cadastro de usuário com status ativo", () => {

      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.get(":nth-child(5) > .styles_button__dr0t2").click()
      cy.get("#nomeCadastrar").type(fakeNome);
      cy.get("#emailCadastrar").type(fake.internet.email())
      cy.get("#senhaCadastrar").type(fake.internet.password() + "@" + "1" + "M");
      cy.get("#unidadeCadastrar").select("CRAS - Pimenta Bueno");
      cy.get("#grupoCadastrar").select("Administrador")
      cy.get(`[type="submit"]`).click()
      cy.contains("Usuário cadastrado com sucesso")
    })
  })


  context("Deve retornar as mensagens de validação ao cadastrar usuário", () => {

    beforeEach(() => {
      cy.visit("https://front-cras.app.fslab.dev")

      cy.get(`#email`).type("adelson.moreira7293298820@gmail.com");
      cy.get("#senha").type("123");
      cy.get(`.styles_button__dr0t2`).click();

      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.get(":nth-child(5) > .styles_button__dr0t2").click()
    })

    it("Campos obrigatório", () => {
      cy.get(`[type="submit"]`).click();
      cy.contains("Nome é obrigatório")
      cy.contains("Email é obrigatório")
      cy.contains("Senha é obrigatório")
      cy.contains("Unidade é obrigatório")
      cy.contains("Grupo é obrigatório")
    })

    it("Senha fraca", () => {
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.get(":nth-child(5) > .styles_button__dr0t2").click()
      cy.get("#nomeCadastrar").type("Robertinho");
      cy.get("#emailCadastrar").type("robertinho@gmail.com")
      cy.get("#senhaCadastrar").type("Mateus");
      cy.get("#unidadeCadastrar").select("CRAS - Pimenta Bueno");
      cy.get("#grupoCadastrar").select("Administrador")
      cy.get("span.styles_slider__0TNp_").click()
      cy.get(`[type="submit"]`).click()
      cy.contains("Senha é obrigatória e deve ter no mínimo 8 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais!")
    })

    it("Email ja cadastrado", () => {
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.get(":nth-child(5) > .styles_button__dr0t2").click()
      cy.get("#nomeCadastrar").type("Robertinho");
      cy.get("#emailCadastrar").type("robertinho@gmail.com")
      cy.get("#senhaCadastrar").type("M@teus124");
      cy.get("#unidadeCadastrar").select("CRAS - Pimenta Bueno");
      cy.get("#grupoCadastrar").select("Administrador")
      cy.get("span.styles_slider__0TNp_").click()
      cy.get(`[type="submit"]`).click()
    })

  })

  context("Testes na tela de listagem", () => {
    beforeEach(() => {
      cy.visit("https://front-cras.app.fslab.dev")

      cy.get(`#email`).type("adelson.moreira7293298820@gmail.com");
      cy.get("#senha").type("123");
      cy.get(`.styles_button__dr0t2`).click();

      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();
      cy.get(".styles_buttonMenu__mmyUS > img").click();
    })

    it("Deve ver as informações de um usuário", () => {
      cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informação do usuário"]').click()
      cy.wait(2000)
      cy.get(".styles_btnClose__C5d6D").click()
    })

    it("Deve realizar a busca do usuário cadastro com status ativo", () => {
      cy.get("#nome").type(fakeNome)
      cy.get(":nth-child(4) > .styles_button__dr0t2").click()
    })


    it("Deve atualizar um usuário", () => {
      cy.get(':nth-child(10) > :nth-child(5) > .styles_container__NSLBw > [alt="Atualizar usuário"]').click()
      cy.get('#nome').type(fakeNome);
      cy.get('[type="submit"]').click()

    })
  })


})