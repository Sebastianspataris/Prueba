

//ingresar a la pagina
describe('Prueba en Zero Web App Security', () => {
  beforeEach(() => {
     
    cy.visit('http://zero.webappsecurity.com/')

    it('Visitar la URL de Zero Web App Security', () => {
     
      cy.visit('http://zero.webappsecurity.com/')
     
     
  
    })
  })


  
//verificacion de el titulo
  describe('Prueba de titulo de la pagina', () => {
    it('Verificar que el titulo sea correcto', () => {

       
        cy.title().should('include', 'Zero - Personal Banking')
     
  
    })
  })

  //Verificar si hay encabezado o logo de la pagina

  describe('Verificar el encabezado o logo de "Zero Web App Security"', () => {
   
    })
  
    it('Verifica la presencia del encabezado o logo', () => {
      
      cy.get('header').should('be.visible')
      cy.get('header').contains('Zero Web App Security').should('be.visible')
    })
  })
