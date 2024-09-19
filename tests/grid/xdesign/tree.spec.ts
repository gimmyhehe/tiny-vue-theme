import { expect, test } from '@playwright/test'

test.describe('grid 组件树表xdesign规范', () => {
  test('树表--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-tree-table#tree-table-set-tree-expansion')
    const demo = page.locator('#tree-table-set-tree-expansion .pc-demo')
    const grid = demo.locator('.tiny-grid.tiny-grid__wrapper')

    await page.setViewportSize({
      width: 1400,
      height: 1200
    })

    await expect(grid).toBeInViewport()
    await expect(grid).toHaveScreenshot('tree.png')

    // 展开态
    await demo.locator('button').filter({ hasText: '展开所有树节点' }).click()
    await expect(grid).toHaveScreenshot('tree-expand.png')
  })
}) 