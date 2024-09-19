import { expect, test } from '@playwright/test'

test.describe('grid 组件冻结xdesign规范', () => {
  test('左冻结--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-fixed#fixed-left-fixed')
    const demo = page.locator('#fixed-left-fixed .pc-demo')

    await expect(demo).toBeInViewport()

    // 滚动到右边
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.click()
    await page.mouse.wheel(2000, 0)
    await expect(demo).toHaveScreenshot('left-fixed.png')
  })

  test('右冻结--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-fixed#fixed-right-fixed')
    const demo = page.locator('#fixed-right-fixed .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('right-fixed.png')
  })

  test('分组表头冻结--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-fixed#group-header-fixed')
    const demo = page.locator('#group-header-fixed .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('group-fixed.png')
  })
}) 