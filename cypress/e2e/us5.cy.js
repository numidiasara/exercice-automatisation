/// <reference types="cypress" />

describe("US5: Être bloqué en cas d’identifiants invalides", () => {
    it("TC-US5-01: En tant que utilisateur,je veux être informé si mes identifiants de connexion sont incorrects,afin de corriger mon erreur et garantir la sécurité de mon compte.", () => {

        cy.visit("https://automationexercise.com/signup");

        cy.get('[data-qa="login-email"]').type('sara.test@gmail.com');
        cy.get('[data-qa="login-password"]').type('chaimaa123456')
        cy.get('[data-qa="login-button"]').click()

    });
});
