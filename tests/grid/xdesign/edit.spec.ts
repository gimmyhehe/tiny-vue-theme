import { expect, test } from '@playwright/test'

test.describe('grid 组件编辑xdesign规范', () => {
  test('编辑--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-editor#editor-inner-editor')
    const demo = page.locator('#editor-inner-editor .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('edit.png')

    // 编辑态
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.locator('.tiny-grid-cell').filter({ hasText: 'GFD科技YX公司' }).click()
    await expect(demo).toHaveScreenshot('edit-active.png')
  })
})  