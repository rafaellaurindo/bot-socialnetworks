import { WebDriver } from 'selenium-webdriver';

import ILoginParams from './ILoginParams';

export default interface ISocialNetwork {
	URL_SOCIALNETWORK: string;
	login(loginData: ILoginParams, driver: WebDriver): Promise<any>;
};
