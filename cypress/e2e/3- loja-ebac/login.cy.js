///<reference types="cypress"/>

describe('Funcionalidade: Login',() =>{

    beforeEach(() => {
        cy. visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    

    it ('Deve fazer login com sucesso', () => {
        cy.get('#username').type('thiago.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, thiago.teste (não é thiago.teste? Sair)')
    }) 

})

it ('deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
    cy.get('#username').type('thiago.@teste.com.br')
    cy.get('#password').type('teste123')
    cy.get('.woocommerce-form > .button').click ()

    //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')
});

it ( 'Deve exibir uma mensagem de erro ao inserir senha invalida', () =>{
    cy.get('#username').type('thiago.teste@teste.com.br')
    cy.get('#password').type('teste123')
    cy.get('.woocommerce-form > .button').click ()

    cy.get('.woocommerce-error'). should('contain' , 'Erro: A senha fornecida para o e-mail thiago.teste@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error'). should('exist') 

})