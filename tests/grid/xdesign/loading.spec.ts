import { expect, test } from '@playwright/test'

test.describe('grid 组件加载中xdesign规范', () => {
  test('加载中--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-loading#loading-grid-loading-tip')
    const demo = page.locator('#loading-grid-loading-tip .pc-demo')

    await expect(demo).toHaveScreenshot('loading.png')
  })
}) 