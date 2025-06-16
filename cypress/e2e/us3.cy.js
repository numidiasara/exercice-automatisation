/// <reference types="cypress" />

describe("US3 : Éviter les doublons d’inscription", () => {
    it("TC-US3-01: En tant qu'utilisateur ayant déjà un compte, je veux être averti si j’essaie de m’inscrire avec une adresse email déjà utilisée, afin de ne pas créer de doublons et éviter les erreurs de compte.", () => {

        cy.visit("https://automationexercise.com/signup");

        cy.get('[data-qa="login-email"]').type('sara.test@gmail.com');
        cy.get('[data-qa="login-password"]').type('rachida123456')
        cy.get('[data-qa="login-button"]').click()
  
    });
});
