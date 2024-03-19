///<reference types="cypress"/>         
require('cypress-xpath');
require('cypress-iframe');

describe('Funcionalidade: consulta', () => {

    it('deve consulta o site', () => {
        cy.visit('https://sabesp-novaagv-hml.engdb.com.br/')
        cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click( )
        cy.get('.botao-aceitar').click()
        cy.get('#login-component_cadastrar > .mat-button-wrapper').click()
        cy.get('#campo-cpf').type(3865075185)
        cy.get('body').should('contain' , 'CPF inválido, o CPF deve conter 11 dígitos.')

    })
})

