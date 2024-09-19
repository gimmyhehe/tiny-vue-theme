import { expect, test } from '@playwright/test'

test.describe('grid 组件展开行xdesign规范', () => {
  test('展开行--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-expand#expand-has-row-expand')
    const demo = page.locator('#expand-has-row-expand .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('expand.png')

    // 展开态
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.locator('.tiny-grid__expanded').click()
    await expect(demo).toHaveScreenshot('expand-active.png')
  })

  test('嵌套表格--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-expand#expand-nested-grid')
    const demo = page.locator('#expand-nested-grid .pc-demo')

    await expect(demo).toBeInViewport()

    // 展开态
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.locator('.tiny-grid__expanded').click()
    await expect(demo).toHaveScreenshot('nest-grid.png')
  })
}) 