/// <reference types="Cypress" />
describe("template spec", () => {
  it("should display the page title", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("have.length", 1).contains("Hey, Arlene!");
  });

  it("should open and close the modal", () => {
    cy.visit("http://localhost:3000/");
    cy.get("header input").click();
    cy.get("h2").contains("Search");

    cy.get("[aria-label='Close modal dialog']").click();
    cy.get("dialog").should("not.exist");
  });
});
