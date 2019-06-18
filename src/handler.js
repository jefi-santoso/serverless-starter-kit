import logger from 'log-winston-aws-level';
import functions from './functions';

/** Sample function, change it as required */
const getApiVersion = (event, context) => {
  // TODO: add middy to handle success and error via callback (event, context, callback)
  logger.info(`event: ${event}, context: ${context}`);
  return functions
    .getApiVersion(event)
    .then((result) => {
      logger.info(result);
    })
    .catch((err) => {
      logger.info(err);
    });
};

const getNameFromBackend = (event, context) => {
  // TODO: add middy to handle success and error via callback (event, context, callback)
  logger.info(`event: ${event}, context: ${context}`);
  return functions
    .getNameFromBackend(event)
    .then((result) => {
      logger.info(result);
    })
    .catch((err) => {
      logger.info(err);
    });
};

export {
  getApiVersion,
  getNameFromBackend,
};
