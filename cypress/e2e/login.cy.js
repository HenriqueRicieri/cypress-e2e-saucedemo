const loginPage = require("../pages/LoginPage");

describe("Login", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("logs in with valid credentials", () => {
    cy.fixture("users").then(({ standard }) => {
      loginPage.login(standard.username, standard.password);
      cy.url().should("include", "/inventory.html");
    });
  });

  it("rejects invalid credentials", () => {
    cy.fixture("users").then(({ wrongPassword }) => {
      loginPage.login(wrongPassword.username, wrongPassword.password);
      loginPage.errorMessage.should(
        "contain.text",
        "Username and password do not match"
      );
    });
  });

  it("blocks a locked out user", () => {
    cy.fixture("users").then(({ lockedOut }) => {
      loginPage.login(lockedOut.username, lockedOut.password);
      loginPage.errorMessage.should(
        "contain.text",
        "Sorry, this user has been locked out."
      );
    });
  });

  it("requires a username", () => {
    loginPage.login(null, "secret_sauce");
    loginPage.errorMessage.should("contain.text", "Username is required");
  });

  it("requires a password", () => {
    loginPage.login("standard_user", null);
    loginPage.errorMessage.should("contain.text", "Password is required");
  });
});
