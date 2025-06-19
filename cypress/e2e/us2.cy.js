/// <reference types="cypress" />

describe("US2 : Créer un compte", () => {
    it("TC-US2-01: En tant que nouvel utilisateur, je veux m’inscrire sur le site avec mon email et mes informations personnelles afin de pouvoir passer des commandes et suivre mes achats.", () => {
        cy.visit("https://automationexercise.com/");
        
        // Cliquer sur le bouton 'Signup / Login'
    
         cy.contains('Signup / Login').click();

        // Remplir le formulaire d'inscription
        cy.get('[data-qa="signup-name"]').type('sara');
        cy.get('[data-qa="signup-email"]').type('sara.test@gmail.com');
        cy.get('[data-qa="signup-button"]').click()
       
        cy.get('#id_gender2').check()
        cy.get('[data-qa="password"]').type('sara123456')
        cy.get('[data-qa="days"]').select('21')
        cy.get('[data-qa="months"]').select('April')
        cy.get('[data-qa="years"]').select('2021')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        // remplir les autres infos
        cy.get('[data-qa="first_name"]').type('chaimaa');
        cy.get('[data-qa="last_name"]').type('elsharifi');
        cy.get('[data-qa="company"]').type('afpa');
        cy.get('[data-qa="address"]').type('26 rue de luxembourg');
        cy.get('[data-qa="address2"]').type('roubaix');
        cy.get('[data-qa="country"]').select('Canada');
        cy.get('[data-qa="state"]').type('Otawa')
        cy.get('[data-qa="city"]').type('Montreal')
        cy.get('form > :nth-child(19)').type('59110')
        cy.get('[data-qa="mobile_number"]').type('0651814393')
        cy.get('[data-qa="create-account"]').click()






     
    


        // Ajouter des assertions ou étapes supplémentaires ici selon le flow de création de compte
    });
});
