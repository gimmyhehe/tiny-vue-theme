import { expect, test } from '@playwright/test'

test.describe('grid 组件分页xdesign规范', () => {
  test('分页--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-pager#pager-inner-default-pager')
    const demo = page.locator('#pager-inner-default-pager .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('pager.png')

  })
}) 