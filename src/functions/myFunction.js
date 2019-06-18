import logger from 'log-winston-aws-level';
import config from '../config/index';

const getApiVersion = (event) => {
  logger.info(event.body);
  return Promise.resolve({ version: config.version });
};

const getNameFromBackend = (event) => {
  logger.info(event.body);
  // TODO: implement call to backend service (GMS)
  // const params = helper.jsonSafeParse(event.body);
  // if(!params){
  //     return Promise.reject(new HttpError(
  //         config.errorMessages.badRequestError,
  //         HttpError.BAD_REQUEST, {}
  //     ));
  // }
  // const logMessage = `${params.title} - ${params.clientId} - ${params.status} - ${params.message}`
  // if(params.type === config.logTypes.error){
  //     logger.error(logMessage);
  // } else {
  //     logger.info(logMessage);
  // }
  return Promise.resolve({ message: 'Hello!' });
};

export {
  getApiVersion,
  getNameFromBackend,
};
