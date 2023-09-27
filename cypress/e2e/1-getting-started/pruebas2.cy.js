
   //prueba de contenido


   
   describe('3.-pruebas de contenido', () => {
     beforeEach(() => {
       // Abre la página web antes de cada prueba
       cy.visit('http://zero.webappsecurity.com/');
       
       // Verifica que la página se haya cargado correctamente
       cy.title().should('include', 'Zero - Personal Banking');
       cy.get('#account_activity_link').should('be.visible');
       cy.get('#money_map_link').should('be.visible');
     });
   
     describe('Prueba de checking account activity', () => {
       it('probar que este checking account activity y su texto de contenido', () => {
         cy.get('#account_activity_link').should('be.visible');
         cy.get('#online_banking_features > :nth-child(2) > div > p').should('be.visible');
       });
     });
   
     describe('Prueba de My money map', () => {
       it('probar que este my money map y su texto de contenido en la pagina', () => {
         cy.get('#money_map_link').should('be.visible');
         cy.get('#online_banking_features > :nth-child(4) > div > p').should('be.visible');
       });
     });
   });