import { expect, test } from '@playwright/test'

test.describe('grid 组件工具栏xdesign规范', () => {
  test('工具栏--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-toolbar#toolbar-insert-delete-update')
    const demo = page.locator('#toolbar-insert-delete-update .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('toolbar.png')
  })

  test('大工具栏--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-toolbar#toolbar-copy-row-data')
    const demo = page.locator('#toolbar-copy-row-data .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('large.png')
  })

  test('两行工具栏--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-toolbar#toolbar-custom-toolbar')
    const demo = page.locator('#toolbar-custom-toolbar .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('two-row.png')
  })
}) 