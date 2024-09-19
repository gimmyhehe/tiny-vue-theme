import { expect, test } from '@playwright/test'

test.describe('grid 组件排序xdesign规范', () => {
  test('排序--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-sort#sort-default-sort')
    const demo = page.locator('#sort-default-sort .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('sort.png')

    // 编辑态
    const header = demo.locator('.tiny-grid-header__row').first()
    await header.locator('.tiny-grid-cell').filter({ hasText: '员工数排序点击表头排序，可以通过配置 trigger 设置触发源' }).locator('svg').click()
    await expect(demo).toHaveScreenshot('sort-active.png')
  })
}) 