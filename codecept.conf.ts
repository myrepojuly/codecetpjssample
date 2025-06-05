import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*test.ts',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://github.com',
      host: 'localhost',
      port: 4444,
      path: '/wd/hub',
      browser: 'chrome',
      desiredCapabilities:{
        'goog:chromeOptions': {
          args: [
            '--disable-gpu',
            '--no-sandbox',
            '--disable-dev-shm-usage',
          ]
        }
      }
    }
    // settings to run locally 
    // WebDriver: {
    //   url: 'https://github.com',
    //   browser: 'chrome'
    // }
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptjs_Check'
}