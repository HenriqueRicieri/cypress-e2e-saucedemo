const inventoryPage = require("../pages/InventoryPage");

describe("Inventory", () => {
  beforeEach(() => {
    cy.fixture("users").then(({ standard }) => {
      cy.loginAs(standard.username, standard.password);
    });
  });

  it("displays the product catalog", () => {
    inventoryPage.items.should("have.length", 6);
  });

  it("sorts products by price, low to high", () => {
    inventoryPage.sortBy("lohi");
    inventoryPage.itemPrices.then(($prices) => {
      const values = [...$prices].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      const sorted = [...values].sort((a, b) => a - b);
      expect(values).to.deep.equal(sorted);
    });
  });

  it("sorts products by name, Z to A", () => {
    inventoryPage.sortBy("za");
    inventoryPage.itemNames.then(($names) => {
      const values = [...$names].map((el) => el.innerText);
      const sorted = [...values].sort().reverse();
      expect(values).to.deep.equal(sorted);
    });
  });

  it("adds a product to the cart", () => {
    inventoryPage.addItemToCart("sauce-labs-backpack");
    inventoryPage.cartBadge.should("have.text", "1");
  });

  it("removes a product from the cart", () => {
    inventoryPage.addItemToCart("sauce-labs-backpack");
    inventoryPage.removeItemFromCart("sauce-labs-backpack");
    inventoryPage.cartBadge.should("not.exist");
  });
});
