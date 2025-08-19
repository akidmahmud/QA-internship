const { Builder, By, until } = require('selenium-webdriver');

(async function fullTrelloFlow() {
    const driver = await new Builder().forBrowser('chrome').build();

    const email = 'mahmudrafsan0115@gmail.com';
    const password = '":n"E2;c3g_Uqtn';

    try {
        // Step 1: Login
        await driver.get('https://trello.com/login');
        await driver.sleep(1000);

        const emailInput = await driver.wait(until.elementLocated(By.id('username')), 15000);
        await emailInput.sendKeys(email);
        await driver.sleep(1000);

        const continueButton = await driver.wait(
            until.elementLocated(By.xpath("//span[text()='Continue']/ancestor::button")),
            10000
        );
        await continueButton.click();
        await driver.sleep(2000);

        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 15000);
        await passwordInput.sendKeys(password);
        await driver.sleep(1000);

        const loginButton = await driver.wait(
            until.elementLocated(By.xpath("//span[text()='Log in']/ancestor::button")),
            10000
        );
        await loginButton.click();

        // Wait for boards page OR workspace prompt
        await driver.sleep(4000);

        // Step 2: Handle "Choose a Workspace" screen if shown
        try {
            const skipWorkspace = await driver.wait(
                until.elementLocated(By.xpath("//button[contains(text(),'Skip') or contains(text(),'Not now')]")),
                5000
            );
            await skipWorkspace.click();
            console.log("⚠️ Skipped workspace selection.");
        } catch (e) {
            console.log("✅ No workspace selection screen.");
        }

        // Step 3: Click "Create new board"
        const createBoardTile = await driver.wait(
            until.elementLocated(By.css('[data-testid="create-board-tile"]')),
            15000
        );
        await createBoardTile.click();
        await driver.sleep(2000);

        // Step 4: Fill board name
        const boardName = `Automated Board ${Date.now()}`;
        const boardInput = await driver.wait(
            until.elementLocated(By.css('input[data-testid="create-board-title-input"]')),
            10000
        );
        await boardInput.sendKeys(boardName);
        await driver.sleep(1000);

        const createButton = await driver.findElement(
            By.css('button[data-testid="create-board-submit-button"]')
        );
        await createButton.click();

        // Step 5: Wait for board to load
        await driver.wait(until.titleContains(boardName), 15000);
        console.log('✅ Board created:', boardName);
        await driver.sleep(2000);

        // Step 6: Add List
        const listInput = await driver.wait(
            until.elementLocated(By.css('textarea[placeholder="Enter list name…"]')),
            10000
        );
        await listInput.sendKeys("To Do");
        await driver.sleep(1000);

        const addListButton = await driver.findElement(
            By.css('button[data-testid="list-composer-add-list-button"]')
        );
        await addListButton.click();
        console.log("✅ List created: To Do");
        await driver.sleep(1000);

        // Step 7: Add Card
        const addCardButton = await driver.wait(
            until.elementLocated(By.css('button[data-testid="list-add-card-button"]')),
            10000
        );
        await addCardButton.click();
        await driver.sleep(1000);

        const cardInput = await driver.wait(
            until.elementLocated(By.css('textarea[data-testid="list-card-composer-textarea"]')),
            10000
        );
        await cardInput.sendKeys("Write Blog Post");
        await driver.sleep(1000);

        const confirmCardButton = await driver.findElement(
            By.css('button[data-testid="list-card-composer-add-card-button"]')
        );
        await confirmCardButton.click();
        console.log("✅ Card added: Write Blog Post");

        console.log("🕒 All done. Browser remains open. Press Ctrl+C to exit.");
    } catch (err) {
        console.error('❌ Test failed:', err);
    }

    // Browser stays open for manual verification
})();
