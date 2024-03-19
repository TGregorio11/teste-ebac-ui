///<reference types="cypress"/>     
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()

    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('thiago.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste (não é thiago.teste? Sair)')
    })



    it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('thiago.@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('thiago.@teste.com.br')
        cy.get('#password').type('teste12')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')

    })


    it('deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste (não é thiago.teste? Sair)')

    });


    it('deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste (não é thiago.teste? Sair)')


        })

    });


    it.only('Deve fazer login com sucesso - usando comando customizado', () => {
        cy.login('thiago.teste@teste.com.br' , 'teste123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste (não é thiago.teste? Sair')
    });
})

