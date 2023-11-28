describe('Funcionalidades Foto, cenário de sucesso', () => {
  
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.getByData('loginUserName').type('mateusmoraes')
    cy.getByData('loginPassword').type('mateusmoraes7')
    cy.getByData('loginBtn').click()
  })

  it('Deve cadastrar com sucesso uma foto', () => {
    cy.get(':nth-child(2) > a > .fa').click()
    cy.get('[type="file"]').selectFile('./radiacao.jpeg', {force:true})
    cy.get('[placeholder="photo description"]').type('é lolo')
    cy.get('[type="submit"]').click()
    cy.contains('Upload complete').should('be.visible')
    cy.get('.fa-home').click()
    cy.get('.img-thumbnail').should('have.length',1)      
  })

  it('Deve dar like e comentar na foto', () => {
    cy.get('.img-thumbnail').first().click()
    cy.get('.fa-heart-o').click()
    cy.wait(1000)
    cy.get('[formcontrolname="comment"]').type('mateus usando cocaina')
    cy.get('[type="submit"]').click()
    cy.wait(2000)
    cy.get('.fa-home').click()
    
  })

  it('Deve Remover uma foto com sucesso', () => {
    cy.get('.img-thumbnail').first().click()
    cy.wait(2000)
    cy.get('.fa-trash-o').click()
    cy.contains('Photo removed').should('be.visible')
  })

  it('Deve Pesquisar uma foto entre duas opções', () => {
  
    /*Adicionando a primeira imagem*/
    cy.get(':nth-child(2) > a > .fa').click()
    cy.get('[type="file"]').selectFile('./radiacao.jpeg', {force:true})
    cy.get('[placeholder="photo description"]').type('não é cocaina é trident')
    cy.get('[type="submit"]').click()
    cy.contains('Upload complete').should('be.visible')
    cy.wait(2000)

    /*Adicionando a segunda imagem*/
    cy.get(':nth-child(2) > a > .fa').click()
    cy.get('[type="file"]').selectFile('./luffyfalso.jpeg', {force:true})
    cy.get('[placeholder="photo description"]').type('ficou uma bosta essa live action !')
    cy.get('[type="submit"]').click()
    cy.contains('Upload complete').should('be.visible')

    /*primeira pesquisa*/
    cy.get('[type="search"]').type('cocaina')
    cy.wait(1000)
    cy.get('.img-thumbnail').first().click()
    cy.get('[class="text-left break-word"]').contains('cocaina')
    cy.wait(1000)
    cy.get('.fa-home').click()

    /*segunda pesquisa*/
    cy.get('[type="search"]').type('live action')
    cy.wait(1000)
    cy.get('.img-thumbnail').first().click()
    cy.get('[class="text-left break-word"]').contains('live action')
    cy.wait(1000)
    cy.get('.fa-home').click()
    
    /*para apagar as imagens adicionadas no banco*/
    cy.wait(2000)
    cy.get('.img-thumbnail').first().click()
    cy.get('.fa-trash-o').click()
    cy.wait(1000)
    cy.get('.img-thumbnail').first().click()
    cy.get('.fa-trash-o').click()
  })

})