import { expect, test } from '@playwright/test'

test.describe('grid 组件表格对齐xdesign规范', () => {
  test('表头对齐--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-align#align-header-align')
    const demo = page.locator('#align-header-align .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('header-align.png')
  })

  test('表尾对齐--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-align#align-footer-align')
    const demo = page.locator('#align-footer-align .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('footer-align.png')
  })

  test('表格对齐--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-align#align-grid-align')
    const demo = page.locator('#align-grid-align .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('grid-align.png')
  })

})  