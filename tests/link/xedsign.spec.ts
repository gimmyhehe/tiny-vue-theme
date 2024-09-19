import { expect, test } from '@playwright/test'

test.describe('link组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const link = page.locator('a').filter({ hasText: /^默认链接$/ })
    await link.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')

    // click 时截图
    await link.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('click.png')
  })

  test('主题样式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link#link-style')
    const demo = page.locator('#link-style .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('link-style.png')

    // hover时截图
    const link = page.locator('a').filter({ hasText: '主要链接' })
    await link.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('style-hover.png')

    // click 时截图
    await link.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('style-click.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link#dynamic-disable')
    const demo = page.locator('#dynamic-disable .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-disable.png')

    // hover时截图
    const link = page.locator('a').filter({ hasText: '默认链接' })
    await link.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disable-hover.png')

    // click 时截图
    await link.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disable-click.png')
  })
  

  test('下划线--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link#focus-no-underline')
    const demo = page.locator('#focus-no-underline .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('focus-no-underline.png')

    // hover时截图
    const link = page.locator('a').filter({ hasText: '无下划线' })
    await link.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('underline-hover.png')

    // click 时截图
    await link.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('underline-click.png')
  })



  test('图标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link#custom-icon')
    const demo = page.locator('#custom-icon .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-icon.png')

    // hover时截图
    const link = page.locator('a').filter({ hasText: '查看' })  
    await link.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('icon-hover.png')

    // click 时截图
    await link.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('icon-click.png')
  })
})
