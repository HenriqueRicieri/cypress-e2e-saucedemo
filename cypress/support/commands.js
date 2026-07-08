/**
 * Logs in through the UI and lands on the inventory page.
 *
 * SauceDemo is a SPA that only serves "/" from the server (inner
 * routes 404 when visited directly) and it does not auto-redirect
 * authenticated users, so the UI login flow is the entry point
 * for every authenticated scenario.
 */
Cypress.Commands.add("loginAs", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password, { log: false });
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});
