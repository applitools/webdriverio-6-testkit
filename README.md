# Applitools SDK for webdriver.io 6

This is a working example to run webdriver.io version 6 with Applitools SDK `@applitools/eyes-webdriverio`.

## Usage

```sh
npm test
```

## Configuration

It's possible to specify the Eyes configuration in `wdio.conf.js` under the `eyes` field. This is just like we do it in the service. The values are ultimately passed in the test to the call `eyes.setConfiguration(browser.config.eyes)`. This is **not** specific to webdriver.io 6, it's also possible to do this in versions 5 and 4.

## Logging

To show verbose Eyes logs, set `enableEyesLogs` to true in the configuration, or run with the environment variable `APPLITOOLS_SHOW_LOGS`.
