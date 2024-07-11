it("visits STOOR and buy product", () => {
  cy.visit("http://localhost:5173/");

  cy.contains("VIEW PRODUCT").click();
  cy.contains("ADD TO BAG").click();
  cy.get('[data-test-id="cart-link"]').click();
});
