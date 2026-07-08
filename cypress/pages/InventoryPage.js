class InventoryPage {

  get items() {
    return cy.get(".inventory_item");
  }

  get itemNames() {
    return cy.get(".inventory_item_name");
  }

  get itemPrices() {
    return cy.get(".inventory_item_price");
  }

  get sortSelect() {
    return cy.get('[data-test="product-sort-container"]');
  }

  get cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  get cartLink() {
    return cy.get(".shopping_cart_link");
  }

  sortBy(value) {
    this.sortSelect.select(value);
  }

  addItemToCart(itemSlug) {
    cy.get(`[data-test="add-to-cart-${itemSlug}"]`).click();
  }

  removeItemFromCart(itemSlug) {
    cy.get(`[data-test="remove-${itemSlug}"]`).click();
  }

  openCart() {
    this.cartLink.click();
  }
}

module.exports = new InventoryPage();
