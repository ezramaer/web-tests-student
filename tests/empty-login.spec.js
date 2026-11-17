import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  // Шаг 1. Открываем главную страницу TestBoard.
  await page.goto('/');

  // Шаг 2. Открываем форму авторизации.
  await page.locator('[data-marker="login-button-desktop"]').click();

  // Шаг 3. Отправляем форму с пустыми полями.
  await page.locator('[data-marker="login-submit-button"]').click();

  // Шаг 4. Проверяем сообщение об ошибке email.
  const emailError = page.locator('[data-marker="email-error"]');

  await expect(emailError).toHaveText('Email обязателен');

  // Шаг 5. Проверяем сообщение об ошибке пароля.
  const passwordError = page.locator('[data-marker="password-error"]');

  await expect(passwordError).toHaveText('Пароль обязателен');

});

