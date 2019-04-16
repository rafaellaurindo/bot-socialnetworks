import { By, Key, WebDriver } from 'selenium-webdriver';

import ILoginParams from './interfaces/ILoginParams';
import ISocialNetwork from './interfaces/ISocialNetwork';

export default class Facebook implements ISocialNetwork {
  public URL_SOCIALNETWORK = 'https://www.facebook.com/';

  public async login(loginData: ILoginParams, driver: WebDriver): Promise<any> {
    await driver.get(`${this.URL_SOCIALNETWORK}/login.php`);
    const usernameElement = await driver.findElement(By.name('email'));
    const passwordElement = await driver.findElement(By.name('pass'));

    return Promise.all([
      await usernameElement.sendKeys(loginData.username),
      await passwordElement.sendKeys(loginData.password, Key.RETURN),
    ]);
  }
}
