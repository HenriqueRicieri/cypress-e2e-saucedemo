const inventoryPage = require("../pages/InventoryPage");
const cartPage = require("../pages/CartPage");
const checkoutPage = require("../pages/CheckoutPage");

describe("Checkout", () => {
  beforeEach(() => {
    cy.fixture("users").then(({ standard }) => {
      cy.loginAs(standard.username, standard.password);
    });
  });

  it("completes a full purchase", () => {
    inventoryPage.addItemToCart("sauce-labs-backpack");
    inventoryPage.addItemToCart("sauce-labs-bike-light");
    inventoryPage.openCart();
    cartPage.checkout();

    checkoutPage.fillInformation({
      firstName: "Henrique",
      lastName: "Ricieri",
      postalCode: "87000-000",
    });

    checkoutPage.summaryItems.should("have.length", 2);
    checkoutPage.finish();

    checkoutPage.completeHeader.should(
      "have.text",
      "Thank you for your order!"
    );
  });

  it("calculates the item total correctly", () => {
    inventoryPage.addItemToCart("sauce-labs-backpack");
    inventoryPage.addItemToCart("sauce-labs-fleece-jacket");
    inventoryPage.openCart();
    cartPage.checkout();

    checkoutPage.fillInformation({
      firstName: "Henrique",
      lastName: "Ricieri",
      postalCode: "87000-000",
    });

    cy.get(".inventory_item_price").then(($prices) => {
      const sum = [...$prices]
        .map((el) => parseFloat(el.innerText.replace("$", "")))
        .reduce((a, b) => a + b, 0);

      checkoutPage.itemTotalLabel.should(
        "have.text",
        `Item total: $${sum.toFixed(2)}`
      );
    });
  });

  it("requires checkout information", () => {
    inventoryPage.addItemToCart("sauce-labs-backpack");
    inventoryPage.openCart();
    cartPage.checkout();

    checkoutPage.fillInformation({});
    checkoutPage.errorMessage.should("contain.text", "First Name is required");
  });
});
