# 🧪 Playwright E2E Real World Framework

End-to-end test automation framework built with **Playwright** using **best practices**, **Page Object Model**, and **real-world scenarios**.
This project demonstrates how a QA Automation / SDET would design, structure, and maintain a scalable E2E testing solution.

---

## 🚀 Tech Stack

* **Playwright**
* **TypeScript**
* **Node.js**
* **GitHub Actions (CI)**
* **Page Object Model (POM)**

---

## 🧠 Project Goals

* Automate real end-to-end user flows
* Follow clean and maintainable architecture
* Separate test logic from test data
* Optimize execution time using authenticated state
* Provide fast feedback using smoke and regression suites
* Demonstrate production-ready automation practices

---

## 📂 Project Structure

```
├── pages/              # Page Object Models
├── tests/              # E2E test suites
│   ├── auth/           # Authentication setup
│   ├── products/       # Inventory tests
│   ├── cart/           # Cart validations
│   └── checkout/       # Checkout E2E flow
├── fixtures/           # Test data (users, messages)
├── .auth/              # Auth storage state (gitignored)
├── .github/workflows/  # GitHub Actions CI
├── playwright.config.ts
└── README.md
```

---

## 🔐 Authentication Strategy

This framework uses **Playwright storageState** to authenticate once and reuse the session across tests.

**Benefits:**

* Faster execution
* Cleaner tests
* Better test isolation
* Realistic E2E flows

---

## 🧪 Test Strategy

### Test Suites

* **Smoke tests (`@smoke`)**
  Critical paths executed on Pull Requests

* **Regression tests (`@regression`)**
  Full coverage executed on merge to `main`

### Covered Flows

* Login (valid, invalid, locked user)
* Product listing
* Add to cart
* Cart validation
* Checkout happy path

---

## ▶️ How to Run Tests

### Install dependencies

```bash
npm install
```

### Run all tests

```bash
npm test
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run regression tests

```bash
npm run test:regression
```

### Open Playwright UI

```bash
npm run test:ui
```

---

## 🤖 Continuous Integration (CI)

This project uses **GitHub Actions**:

* Smoke tests run on Pull Requests
* Regression tests run on pushes to `main`
* Playwright HTML report is generated and stored as an artifact

---

## 📈 Why This Project Matters

This repository reflects:

* Real-world QA automation practices
* Scalable and maintainable test design
* Strong understanding of E2E testing
* Experience with CI/CD pipelines
* QA mindset focused on quality, speed, and reliability

---

## 👤 Author

**Richard Ledesma**
QA Engineer | Automation & Accessibility Testing

---

## 📝 Notes

* Target application: [https://www.saucedemo.com](https://www.saucedemo.com)
* This project is for educational and portfolio purposes
