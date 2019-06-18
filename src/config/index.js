/* eslint-disable import/no-dynamic-require */
import merge from 'deepmerge';
import dotenv from 'dotenv';
import logger from 'log-winston-aws-level';
import baseConfig from './config.base.json';
import siebelConfig from './config.siebel.json';

dotenv.config();
const env = process.env.ENV;
const siebelEnv = process.env.SIEBEL_ENV;
logger.info(`Env: ${env}`);
if (!env) {
  throw new Error('Unable to get CONFIG ENV!');
}
const envConfig = require(`./config.${env}.json`);

logger.info(`siebelEnv: ${siebelEnv}`);
if (!siebelEnv) {
  throw new Error('Unable to get SIEBEL ENV!');
}

const mergedConfig = merge.all([
  baseConfig,
  envConfig,
  siebelConfig[siebelEnv],
]);

export default mergedConfig;
