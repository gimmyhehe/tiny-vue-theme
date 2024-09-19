import { expect, test } from '@playwright/test'

test.describe('grid 组件外观设置xdesign规范', () => {
  test('边框--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-appearance-settings#appearance-settings-grid-border')
    const demo = page.locator('#appearance-settings-grid-border .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('border.png')

    // 带边框的hover
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.hover()
    await expect(demo).toHaveScreenshot('border-hover.png')
  })

  test('斑马纹--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-appearance-settings#appearance-settings-stripe')
    const demo = page.locator('#appearance-settings-stripe .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('stripe.png')

    // 斑马纹的hover
    const secondRow = demo.locator('.tiny-grid-body__row').nth(1)
    await secondRow.hover()
    await expect(demo).toHaveScreenshot('stripe-hover.png')
    // 斑马纹选中
    await secondRow.locator('.tiny-grid-checkbox__icon').click()
    await expect(demo).toHaveScreenshot('stripe-select.png')
  })

})  