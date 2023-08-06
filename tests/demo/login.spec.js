//npm run test my_first_test.spec.js - to run the test
//npx playwright test login.spec.js --headed - open in npx mode with browser (headed)
//npx playwright codegen  - open codegen
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('login', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage()
  await Login.login('tomsmith', 'SuperSecretPassword!')
});