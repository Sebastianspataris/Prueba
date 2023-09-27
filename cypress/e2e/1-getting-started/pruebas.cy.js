

//ingresar a la pagina
describe('Prueba en Zero Web App Security', () => {
    it('Visitar la URL de Zero Web App Security', () => {
     
      cy.visit('http://zero.webappsecurity.com/')
     
     
  
    })
  })


  
//verificacion de el titulo
  describe('Prueba de titulo de la pagina', () => {
    it('Verificar que el titulo sea correcto', () => {

        cy.visit('http://zero.webappsecurity.com/')
        cy.title().should('include', 'Zero - Personal Banking')
     
  
    })
  })

  //Verificar si hay encabezado o logo de la pagina

  describe('Verificar el encabezado o logo de "Zero Web App Security"', () => {
    beforeEach(() => {
     
      cy.visit('http://zero.webappsecurity.com/')
    })
  
    it('Verifica la presencia del encabezado o logo', () => {
      
      cy.get('header').should('be.visible')
  
      
      cy.get('header').contains('Zero Web App Security').should('be.visible')
    })
  })

   //prueba de contenido

   describe('Prueba de checking account activity', () => {
    it('probar que este checking account activity y su texto de contenido', () => {

        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#account_activity_link').should('be.visible')
        cy.get('#online_banking_features > :nth-child(2) > div > p').should('be.visible')
     
  
    })
  })
  
  describe('Prueba de My money map', () => {
    it('probar que este my money map y su texto de contenido en la pagina', () => {

        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#money_map_link').should('be.visible')
        cy.get('#online_banking_features > :nth-child(4) > div > p').should('be.visible')
     
  
    })
  })