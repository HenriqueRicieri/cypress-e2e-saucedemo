class CheckoutPage {
  get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  get postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  get continueButton() {
    return cy.get('[data-test="continue"]');
  }

  get finishButton() {
    return cy.get('[data-test="finish"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  get summaryItems() {
    return cy.get(".cart_item");
  }

  get itemTotalLabel() {
    return cy.get(".summary_subtotal_label");
  }

  get completeHeader() {
    return cy.get(".complete-header");
  }

  fillInformation({ firstName, lastName, postalCode }) {
    if (firstName) this.firstNameInput.type(firstName);
    if (lastName) this.lastNameInput.type(lastName);
    if (postalCode) this.postalCodeInput.type(postalCode);
    this.continueButton.click();
  }

  finish() {
    this.finishButton.click();
  }
}

module.exports = new CheckoutPage();
