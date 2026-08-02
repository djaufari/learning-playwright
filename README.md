Welcome to this repository, this repo i dedicate to record my learning journey with Playwright using TypeScript.

Im write this code with Playwright using the POM approach to make the test code clean and reusable. You can see the locator at pages file and i import it to testingdemo.spec.ts so it can be called.

* I only run in Chrome because it way faster, but if you interested to run in 3 browser (chrome, mozilla, safari), just go to the playwright.config.ts and remove the line comment from line 49 untuk line 57. And if you want it run parallel, just change the fullyParallel at line 17 to "true".

# How To Run :

1. Install The Project Dependencies :
- npm install

2. Install The Playwright Browsers :
- npx playwright install

3. Run The Test :
- npx playwright test (This command will run all test without preview)
- npx playwright test --grep="<featurename>" (This command will run specific feature test that you wrote at test.describe)

4. See The Report :
- npx playwright show-report (This command will pop up the result with HTML format)
