# Page Object Model (POM) Structure for DemoQA Tests

## Project Structure

```
POM_demoQA/
├── pages/                  # Page Object Model classes
│   ├── BasePage.js        # Base page with common functionality
│   └── elements/          # Element-specific page objects
│       └── ButtonsPage.js # Buttons page object
├── data/                  # Test data and configurations
│   └── buttonsTestData.js # Button test data
├── utils/                 # Utility functions and helpers
│   ├── TestUtils.js      # Common test utilities
│   └── testConfig.js     # Test configuration
└── tests/                # Test specifications
    └── Elements_demoQa/
        └── buttons.spec.js # Button functionality tests
```

## Key Features

### 1. Page Object Model (POM)
- **BasePage.js**: Contains common functionality shared across all pages
- **ButtonsPage.js**: Specific to buttons functionality with locators and methods
- Separation of concerns between test logic and page interactions

### 2. Externalized Test Data
- **buttonsTestData.js**: Contains URLs, expected messages, and timeouts
- Easy to maintain and update test data without touching test code
- Environment-specific configurations possible

### 3. Utility Functions
- **TestUtils.js**: Common utilities like screenshots, retries, and wait functions
- **testConfig.js**: Global test configuration settings

### 4. Industry Best Practices
- ✅ Page Object Model pattern
- ✅ Externalized test data
- ✅ Reusable utility functions
- ✅ Proper test structure with beforeEach hooks
- ✅ Separated test concerns
- ✅ Individual test methods for better reporting
- ✅ Maintainable and scalable architecture

## Running Tests

```bash
npx playwright test tests/Elements_demoQa/buttons.spec.js
```

## Benefits

1. **Maintainability**: Changes to UI elements only require updates in page objects
2. **Reusability**: Page objects and utilities can be reused across multiple tests
3. **Readability**: Tests are more readable and focused on business logic
4. **Scalability**: Easy to add new pages and tests following the same pattern
5. **Data Management**: Test data is centralized and easy to manage