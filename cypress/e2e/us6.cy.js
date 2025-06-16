/// <reference types="cypress"/>
describe("US6 : Rechercher un produit", () => {
    it("TC-US6-01: En tant que utilisateur,je veux rechercher un produit par mot-clé,afin de trouver rapidement un article spécifique dans le catalogue.", () => {
        cy.visit("https://automationexercise.com/")

        cy.contains('Products').click();
        cy.get('#search_product').type('tshirt')
        cy.get('#submit_search').click()

    
    })
})