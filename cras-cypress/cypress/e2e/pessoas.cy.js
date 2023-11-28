import fake from "faker-br"

var fakeNome = fake.name.firstName();

var fakeCPF = fake.br.cpf()

describe("Pessoas", () => {

  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev")

    cy.get(`#email`).type("adelson.moreira7293298820@gmail.com");
    cy.get("#senha").type("123");
    cy.get(`.styles_button__dr0t2`).click();

  })

  it("Deve cadastrar a pessoas com todos os campos preenchidos", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    // Entrar na tela de pessoas
    cy.get(":nth-child(4) > .styles_container__NSLBw > #buscar").click()
    cy.get("#nome").type(fakeNome);
    cy.get("#cpf").type(fakeCPF);
    cy.get("#nit").type(fake.br.cpf());
    cy.get("#dataNascimento").type("1992-12-03")
    cy.get("#estrangeiro").select("Sim");
    cy.get("#bairro").type(fake.address.streetName())
    cy.get("#logradouro").type(fake.address.streetName());
    cy.get("#cep").type(fake.address.zipCode() + fake.address.zipCode())
    cy.get("#numero").type(fake.random.number());
    cy.get("#telefone").type(fake.phone.phoneNumber())
    cy.get("#telefoneContato").type(fake.name.firstName() + fake.name.lastName())
    cy.get('[type="submit"]').click();
    cy.wait(1000)
    cy.get(".styles_warning__6QZnN").click()
  })

  it("Deve retornar mensagens de campos obrigatórios", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.get(":nth-child(4) > .styles_container__NSLBw > #buscar").click()
    cy.get('[type="submit"]').click();
    cy.contains("Nome é obrigatório");
    cy.contains("Data de nascimento é obrigatório")
  })

  it("Deve buscar uma pessoa por nome e alterar seus dados", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.get(":nth-child(1) > #nome").type(fakeNome);
    cy.get(":nth-child(3) > .styles_container__NSLBw > #buscar").click();
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').click();
    cy.get("#nome").type(fakeNome + "2");
    cy.get("#cep").type(fake.address.zipCode() +fake.address.zipCode())
    cy.get('[type="submit"]').click();
    cy.wait(1000)
    cy.get(".styles_warning__6QZnN").click()
  })

  it("Deve buscar uma pessoa por cpf e alterar seus dados", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.get(":nth-child(2) > #nome").type("200.001.849-82");
    cy.get(":nth-child(3) > .styles_container__NSLBw > #buscar").click();
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').click();
    cy.get("#telefoneContato").type(fake.name.firstName());
    cy.get("#cep").type(fake.address.zipCode() +fake.address.zipCode())
    cy.get('[type="submit"]').click();
    cy.wait(1000)
    cy.get(".styles_warning__6QZnN").click()
  })

  it("Deve cadastrar atendimento para pessoa", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.get(":nth-child(1) > #nome").type(fakeNome);
    cy.get(":nth-child(3) > .styles_container__NSLBw > #buscar").click();
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Cadastrar atendimento"]').click();
    cy.get("#dataAtendimento").type("1992-12-03")
    cy.get("#tipo").select("Tipo Inova Brasil")
    cy.get("#observacao").type(fake.lorem.sentence());
    cy.get('[type="submit"]').click();
    cy.wait(1000)
    cy.get(".styles_warning__6QZnN").click()
  })

  it("Deve visualizar os dados da pessoa", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.get(":nth-child(1) > #nome").type(fakeNome);
    cy.get(":nth-child(3) > .styles_container__NSLBw > #buscar").click();
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informações da pessoa"]').click();
    cy.wait(2000)
    cy.get(".styles_btnClose__C5d6D").click()
  })

  it("Deve buscar pessoa, listar os atendimentos recebidos e alterar os dados", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
    cy.get(".styles_buttonMenu__mmyUS > img").click();
    cy.get(":nth-child(1) > #nome").type(fakeNome);
    cy.get(':nth-child(3) > :nth-child(5) > .styles_container__NSLBw > [alt="Ver atendimentos dessa pessoa"]').click();
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click()
    cy.get("#observacaoAtendimento").type(fake.lorem.sentence());
    cy.wait(1000)
    cy.get('[type="submit"]').click()
  })

})