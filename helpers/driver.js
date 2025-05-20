import { Builder } from 'selenium-webdriver';

export const buildDriver = async () => {
  return await new Builder().forBrowser('chrome').build();
};
