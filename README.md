# UI Automation Framework

This project contains automated UI tests built with Playwright and the Page Object Model (POM) design pattern. It is integrated with GitHub Actions for Continuous Integration and uses Allure for reporting.

## Features

- **Framework:** Playwright (Node.js)
- **Design Pattern:** Page Object Model (POM)
- **Reporting:** Allure Report
- **CI/CD:** GitHub Actions (runs on Ubuntu)

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Installation

1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd POM_Automation
Install dependencies:

Bash

npm ci
Install required browsers:

Bash

npx playwright install chromium --with-deps
Running Tests
To run the full test suite in headless mode:

Bash

npx playwright test
To run tests in UI mode (interactive):

Bash

npx playwright test --ui
Viewing Reports
To generate and view the Allure report locally after a test run:

Bash

npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
CI/CD Workflow
Tests run automatically on every push or pull request to the main branch. The execution history and reports are published to GitHub Pages.
