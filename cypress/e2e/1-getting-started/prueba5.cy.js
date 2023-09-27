describe('6.- pruebas adicionales', () => {
  beforeEach(() => {
    cy.visit('http://zero.webappsecurity.com/');
  });
  it('1.- inicio de sesion datos faltantes', () => {
  cy.get('#signin_button').click(); //clic en singin
  cy.get('.btn').click(); // clic en iniciar sesion
  });
  it('2.-transferir fondos datos faltantes / pagar datos faltantes', () => {
    cy.get('#signin_button').click(); //clic en singin
    cy.get('#user_login').type("username"); //introduce usuario
    cy.get('#user_password').type("password"); // introduce contraseña
    cy.get('.btn').click(); // clic en iniciar sesion
    cy.get('#transfer_funds_tab > a').click();
    cy.get('#btn_submit').click();
    cy.get('#pay_bills_tab > a').click();
    cy.get('#pay_saved_payees').click();
    });
    it('2.-verificacion de la imagen', () => {
      
      cy.get('.active > img').should('have.attr', 'src').should('not.be.empty'); // Verifica que la imagen tenga un atributo 'src' no vacío
      cy.get('.right').click({ force: true });
      cy.get('.active > img').should('have.attr', 'src').should('not.be.empty'); // Verifica que la imagen tenga un atributo 'src' no vacío
      cy.get('.right').click({ force: true });
      cy.get('.active > img').should('have.attr', 'src').should('not.be.empty'); // Verifica que la imagen tenga un atributo 'src' no vacío
      cy.get('.right').click({ force: true });
      
    
    

    });
    
});
