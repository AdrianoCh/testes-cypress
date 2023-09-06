
const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200');
        cy.get(el.registerNow).click();
    }

    preencherFormulario(){
        cy.get(el.email).type('adriano@teste.com.br');
        cy.get(el.fullName).type('Adriano C');
        cy.get(el.registerUserName).type('adriano');
        cy.get(el.registerPassword).type('112233');
    }

    submeterCadastro(){
        cy.get(el.btnRegister).click();
    }
}

    
export default new Cadastro();