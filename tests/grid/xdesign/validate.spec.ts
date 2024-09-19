import { expect, test } from '@playwright/test'

test.describe('grid 组件校验xdesign规范', () => {
  test('气泡提示校验--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-validation#validation-editing-validation')
    const demo = page.locator('#validation-editing-validation .pc-demo')

    await expect(demo).toBeInViewport()
    const second = demo.locator('.tiny-grid-body__row').nth(1)
    await second.locator('.tiny-grid-cell').filter({ hasText: 'WWW科技YX公司' }).click()
    await second.locator('input').fill('')
    await expect(demo).toHaveScreenshot('validate.png')
  })

  test('行内提示校验--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-validation#valid-config')
    const demo = page.locator('#valid-config .pc-demo')

    await expect(demo).toBeInViewport()
    // 编辑态
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.locator('td').nth(3).click()
    await expect(demo).toHaveScreenshot('inline-validate.png')
  })
}) 