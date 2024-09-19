import { expect, test } from '@playwright/test'

test.describe('grid 组件空数据xdesign规范', () => {
  test('空数据--UI截图', async ({ page }) => {

    await page.goto('grid-empty#empty-empty-data-default-tip')
    const demo = page.locator('#empty-empty-data-default-tip .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('empty.png')
  })

  test('空数据居中--UI截图', async ({ page }) => {

    await page.goto('grid-empty#empty-empty-data-iscenter')
    const demo = page.locator('#empty-empty-data-iscenter .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('center-empty.png')

  })
})  