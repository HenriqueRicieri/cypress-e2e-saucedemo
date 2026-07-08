# SauceDemo E2E Test Suite 🧪

[![E2E Tests](https://github.com/HenriqueRicieri/cypress-e2e-saucedemo/actions/workflows/ci.yml/badge.svg)](https://github.com/HenriqueRicieri/cypress-e2e-saucedemo/actions/workflows/ci.yml)
[![Cypress](https://img.shields.io/badge/Cypress-15-69D3A7?logo=cypress&logoColor=white)](https://www.cypress.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

End-to-end test automation suite for [SauceDemo](https://www.saucedemo.com), built with **Cypress** using the **Page Object Model** pattern and running on **GitHub Actions** on every push.

## What's covered

| Area | Scenarios |
|------|-----------|
| **Login** | valid credentials, invalid password, locked out user, required field validation |
| **Inventory** | catalog rendering, sorting by price and name, adding/removing items from cart |
| **Cart** | item details, removing items, navigation back to catalog |
| **Checkout** | full purchase flow, order total calculation, required information validation |

## Tech & practices

- ⚡ **Cypress 15** — fast, reliable browser automation
- 📄 **Page Object Model** — selectors and actions isolated per page, specs stay readable
- 🔁 **Custom commands** — `cy.loginAs()` encapsulates the UI login flow used by every authenticated scenario
- 🧩 **Fixtures** — test data separated from test logic
- 🤖 **GitHub Actions CI** — full suite runs on every push, screenshots uploaded on failure
- 🔂 **Automatic retries** in CI to eliminate flakiness

## Project structure

```
cypress/
├── e2e/            # Test specs (login, inventory, cart, checkout)
├── pages/          # Page Objects (LoginPage, InventoryPage, CartPage, CheckoutPage)
├── fixtures/       # Test data (users.json)
└── support/        # Custom commands (cy.loginAs) and global config
```

## Getting started

```bash
# install dependencies
npm install

# open the Cypress runner (interactive)
npm run cy:open

# run the full suite headless
npm run cy:run
```

## CI

Every push to `main` triggers the [E2E Tests workflow](.github/workflows/ci.yml):

1. Checks out the code and installs dependencies (with caching)
2. Runs the entire Cypress suite in Chrome
3. On failure, uploads screenshots as build artifacts for debugging

---

## Author

**Henrique Ricieri** — QA Analyst

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henrique-ricieri-77592917a)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/HenriqueRicieri)
