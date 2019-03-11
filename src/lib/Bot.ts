import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { Options, ServiceBuilder } from 'selenium-webdriver/chrome';

import { path } from 'chromedriver';

import ILoginParams from './interfaces/ILoginParams';
import ISocialNetwork from './interfaces/ISocialNetwork';

export default class Bot {
	private webDriver: WebDriver;

	/**
	 * Makes the login to the social network.
	 * 
	 * @param  {ILoginParams} loginData
	 * @param  {ISocialNetwork} socialNetworkBot
	 */
	public async login(loginData: ILoginParams, socialNetworkBot: ISocialNetwork): Promise<object> {
		return await socialNetworkBot.login(loginData, this.webDriver);
	}

	/**
	 * Start the web driver.
	 * 
	 * @param  {boolean} showInterface set true to show browser interface. Default: false.
	 */
	public async start(showInterface: boolean = false): Promise<any> {
		const options = new Options();
		const chromeService = new ServiceBuilder(path);

		if (!showInterface) {
			options.headless();
		}

		options.addArguments('disable-infobars');
		options.addArguments('disable-infobars');
		options.addArguments('--disable-extensions');
		options.addArguments('--disable-gpu');
		options.addArguments('--disable-dev-shm-usage');
		options.addArguments('--no-sandbox');

		this.webDriver = await new Builder()
			.withCapabilities(Capabilities.chrome())
			.setChromeOptions(options)
			.setChromeService(chromeService)
			.build();
	}

	/**
	 * Closes the web driver.
	 */
	public async quit(): Promise<any> {
		await this.webDriver.quit();
	}
}
