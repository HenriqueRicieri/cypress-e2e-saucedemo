const inventoryPage = require("../pages/InventoryPage");
const cartPage = require("../pages/CartPage");

describe("Cart", () => {
  beforeEach(() => {
    cy.fixture("users").then(({ standard }) => {
      cy.loginAs(standard.username, standard.password);
    });
  });

  it("shows the added product with the right name", () => {
    inventoryPage.addItemToCart("sauce-labs-backpack");
    inventoryPage.openCart();

    cartPage.items.should("have.length", 1);
    cartPage.itemNames.first().should("have.text", "Sauce Labs Backpack");
  });

  it("removes a product from the cart page", () => {
    inventoryPage.addItemToCart("sauce-labs-bike-light");
    inventoryPage.openCart();

    cartPage.removeItem("sauce-labs-bike-light");
    cartPage.items.should("have.length", 0);
  });

  it("navigates back to the catalog with continue shopping", () => {
    inventoryPage.openCart();
    cartPage.continueShoppingButton.click();
    cy.url().should("include", "/inventory.html");
  });
});
