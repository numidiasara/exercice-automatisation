/// <reference types="cypress" />

describe("US4 : Me connecter", () => {
    it("TC-US4-01: En tant que utilisateur inscrit,je veux pouvoir me connecter avec mes identifiants,afin de accéder à mon espace personnel et à mon historique de commandes.", () => {

        cy.visit("https://automationexercise.com/signup");

        cy.get('[data-qa="login-email"]').type('sara.test@gmail.com');
        cy.get('[data-qa="login-password"]').type('sara123456')
        cy.get('[data-qa="login-button"]').click()

    });
});
