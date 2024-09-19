import { expect, test } from '@playwright/test'

test.describe('grid 组件尺寸xdesign规范', () => {
  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-size#size-grid-size')
    const demo = page.locator('#size-grid-size .pc-demo')

    await expect(demo).toBeInViewport()
    await demo.locator('.tiny-tabs__item__title').filter({ hasText: 'mini' }).click()

    const miniGrid = demo.locator('.tiny-grid__wrapper.size__mini')
    await expect(miniGrid).toHaveScreenshot('mini.png')
  })
}) 