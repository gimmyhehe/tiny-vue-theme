import { expect, test } from '@playwright/test'

test.describe('grid 组件过滤xdesign规范', () => {
  test('过滤--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-filter#filter-default-filter')
    const demo = page.locator('#filter-default-filter .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('filter.png')

    // 编辑态
    const header = demo.locator('.tiny-grid-header__row').first()
    await header.locator('.tiny-grid-cell').filter({ hasText: '城市' }).locator('.tiny-grid-filter-wrapper').click()
    await page.locator('.tiny-grid__filter-option').filter({ hasText: '中山' }).locator('svg').click()
    await expect(demo).toHaveScreenshot('filter-active.png')
  })
}) 