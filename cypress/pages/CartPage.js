class CartPage {
  get items() {
    return cy.get(".cart_item");
  }

  get itemNames() {
    return cy.get(".inventory_item_name");
  }

  get checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  get continueShoppingButton() {
    return cy.get('[data-test="continue-shopping"]');
  }

  removeItem(itemSlug) {
    cy.get(`[data-test="remove-${itemSlug}"]`).click();
  }

  checkout() {
    this.checkoutButton.click();
  }
}

module.exports = new CartPage();
