/// <reference types="cypress"/>
describe("US1 : Accédé à la page d'acceul", () => {
    it("TC-US1-01: En tant que visiteur,je veux accéder à la page d’accueil du site,afin de découvrir les produits proposés par la plateforme.", () => {
        cy.visit("https://automationexercise.com/")
        cy.get('#slider-carousel > .carousel-inner')
            .should('be.visible') 
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo') 
            .should('be.visible')     
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
             .click()
    })
})