
//pruebas de interaccion


describe('Suite de Pruebas', () => {
  beforeEach(() => {
    // Abre la página web antes de cada prueba
    cy.visit('http://zero.webappsecurity.com/');
  });

  it('04.- Validar funcionalidad de interaccion enlaces otras paginas', () => {
    cy.get('#signin_button').click(); //clic en singin
    cy.get('#user_login').type("username"); //introduce usuario
    cy.get('#user_password').type("password"); // introduce contraseña
    cy.get('.btn').click(); // clic en boton iniciar sesion
    cy.get('#account_activity_tab > a').click(); // clic en acount activity
    cy.get('#transfer_funds_tab > a').click(); // clic en transferer funds
    cy.get('#pay_bills_tab > a').click(); // clic en  pay bills
    cy.get('#online_statements_tab > a').click();// clic en online statements
    cy.get(':nth-child(2) > .dropdown-toggle').click();// clic en  settings (verificacion despliege)
    cy.get(':nth-child(3) > .dropdown-toggle').click(); // clic en username (verificacion de despliege )
    cy.get('#money_map_tab > a').click(); // clic en my money map
  });


  it('05.- Validar funcionalidad de interaccion enlaces otras paginas', () => {
    cy.get('#signin_button').click(); //clic en singin
    cy.get('#user_login').type("username"); //introduce usuario
    cy.get('#user_password').type("password"); // introduce contraseña
    cy.get('.btn').click(); // clic en boton iniciar sesion
    cy.get('#transfer_funds_tab > a').click(); // clic en transferer funds
    cy.get('#tf_amount').type("1000");
    cy.get('#tf_description').type("hola");
    cy.get('#btn_submit').click();
    cy.get('#btn_submit').click();
    it('05.- Validar funcionalidad de interaccion enlaces otras paginas', () => {
      cy.get('#signin_button').click(); //clic en singin
      cy.get('#user_login').type("username"); //introduce usuario
      cy.get('#user_password').type("password"); // introduce contraseña
      cy.get('.btn').click(); // clic en boton iniciar sesion
      cy.get('#transfer_funds_tab > a').click(); // clic en transferer funds
      cy.get('#tf_amount').type("1000");
      cy.get('#tf_description').type("hola");
      cy.get('#btn_submit').click();
      cy.get('#btn_cancel').click();
    
    
  });
  });
});
