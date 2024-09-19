import { expect, test } from '@playwright/test'

test.describe('grid 组件选中行xdesign规范', () => {
  test('基本用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-operation-column#operation-column-selection-operation')
    const demo = page.locator('#operation-column-selection-operation .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // 表格行悬浮
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.hover()
    await expect(demo).toHaveScreenshot('row-hover.png')

    // 选中某一行
    await firstRow.locator('.tiny-grid-checkbox__icon').click()
    await expect(demo).toHaveScreenshot('selection.png')

    // 全部选中
    await demo.locator('.tiny-grid-header__row .tiny-grid-checkbox__icon').click()
    await expect(demo).toHaveScreenshot('all-selection.png')
  })


  test('单选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    
    await page.goto('grid-operation-column#operation-column-clear-and-set-radio-row')
    const demo = page.locator('#operation-column-clear-and-set-radio-row .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('radio.png')
    // 单选行悬浮
    const firstRow = demo.locator('.tiny-grid-body__row').first()
    await firstRow.hover()
    await expect(demo).toHaveScreenshot('radio-hover.png')

    // 单选选中某一行
    await firstRow.locator('.tiny-grid-radio').click()
    await expect(demo).toHaveScreenshot('radio.png')
  })
})