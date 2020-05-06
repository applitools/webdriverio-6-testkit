const {Eyes, Target, ConsoleLogHandler} = require('@applitools/eyes-webdriverio')
describe('webdriver.io page', () => {
  it('should have the right title', () => {
      browser.url('https://webdriver.io')
      const title = browser.getTitle()
      expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
      const eyes = new Eyes()
      if (browser.config.enableEyesLogs) {
        eyes.setLogHandler(new ConsoleLogHandler(true))
      }
      eyes.setConfiguration(browser.config.eyes)
      browser.call(() => eyes.open(browser, 'wdio6-testkit', 'wdio6 homepage'))
      browser.call(() => eyes.check('', Target.window().fully().timeout(0)))
      browser.call(() => eyes.close())
  })
})