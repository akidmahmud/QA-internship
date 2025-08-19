# Trello Selenium Automation Script – QA Internship

This repository contains a basic Selenium automation script written in **JavaScript** to test core user functionalities of the **Trello** platform. It is part of the submission for **Round 1: Technical Test** of the Deepchain Labs QA Internship.

---

## ✅ What the Test Does, How to Install & Run It

The script automates the following steps:

1. Opens the Trello login page.
2. Logs in using hardcoded credentials (inside `test.js`).
3. Creates a new board titled `Automated Board <timestamp>`.
4. Adds a list titled **"To Do"**.
5. Adds a card titled **"Write Blog Post"** to that list.
6. Leaves the browser open for manual verification (you can close it with `Ctrl + C`).

---

### 📦 To Install Dependencies and Run the Test:

#### ✅ Prerequisites

- **[Node.js (v16+)](https://nodejs.org/en/download/)**  
  JavaScript runtime required to run the automation script.  
  Download and install for your OS (Windows/macOS/Linux).

- **[Google Chrome](https://www.google.com/chrome/)**  
  The browser used for executing and verifying Trello UI automation.

- **[ChromeDriver](https://chromedriver.chromium.org/downloads)**  
  A driver that allows Selenium to control Chrome.  
  > ⚠️ Make sure to download the version that matches your installed Chrome version and **add it to your system PATH**.

---

#### ✅ Setup and Run:
```bash
# Step 1: Create project folder
mkdir selenium-test
cd selenium-test

# Step 2: Initialize npm
npm init -y

# Step 3: Install Selenium WebDriver
npm install selenium-webdriver

# Step 4: Add your 'test.js' file here (script contains your automation)

# Step 5: Run the test
node test.js
```

The script will launch Chrome, perform login, create a board, add a list and a card, and stay open for you to verify the results.

---

## 🗂 Folder Structure

```
selenium-test/
├── test.js          # Selenium script file
├── package.json     # Node project metadata
└── README.md        # This documentation file
```

---

## 👤 Author

**Akid Mahmud**  
📅 Submitted on: May 26, 2025  
