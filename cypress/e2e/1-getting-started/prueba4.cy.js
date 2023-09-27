describe('Suite de Pruebas', () => {
    beforeEach(() => {
      // Abre la página web antes de cada prueba
      cy.visit('http://zero.webappsecurity.com/');
      cy.get('#signin_button').click(); //clic en singin
      cy.get('#user_login').type("username"); //introduce usuario
      cy.get('#user_password').type("password"); // introduce contraseña
      cy.get('.btn').click(); // clic en boton iniciar sesion
      cy.get('#transfer_funds_tab > a').click();
    });
    it('05.1.- Validar funcionalidad interactuar con formulario boton aceptar', () => {
      cy.get('#tf_amount').type("1000");
      cy.get('#tf_description').type("hola");
      cy.get('#btn_submit').click();
      cy.get('#btn_submit').click();
    });
    it('05.1.- Validar funcionalidad interactuar con formulario boton cancelar', () => {
      cy.get('#tf_amount').type("1000");
      cy.get('#tf_description').type("hola");
      cy.get('#btn_submit').click();
      cy.get('#btn_cancel').click();
    });
    it('05.1.- Validar funcionalidad interactuar con formulario datos no numericos', () => {
      cy.get('#tf_amount').type("asdasd");
      cy.get('#tf_description').type("hola");
      cy.get('#btn_submit').click();

    });
    it('05.1.- Validar funcionalidad interactuar con formulario datos no numericos', () => {
      cy.get('#pay_bills_tab > a').click();
      cy.get('#sp_amount').type("1000");
      cy.get('#sp_date').click();
      cy.get(':nth-child(1) > :nth-child(6) > .ui-state-default').click();
      cy.get('#sp_description').type("hola");
      cy.get('#pay_saved_payees').click();

    });
    // Aquí puedes agregar más pruebas si es necesario
  
  });
  