// const config = require('../../config');
// const HttpClient = require('../../helpers/httpClient');
// const httpClient = new HttpClient();
// const logger = require('log-winston-aws-level');
// const HttpError = require('../../helpers/httpError');

// const getMember = (request) => {
//     if(!request.isValid()){
//         return Promise.reject(new HttpError(
//             config.errorMessages.badRequestError,
//             HttpError.BAD_REQUEST, request
//         ));
//     }
//     const memberInfoUrl = `${config.member_info.base_url}/member/${request.properties.memberNumber}/dob/${request.properties.dob}/postcode/${request.properties.postcode}`;
//     const headers = {'x-api-key': process.env.member_uri_api_key};
//     return httpClient.get(memberInfoUrl, headers)
//     .then((response) => {
//         return JSON.parse(response.body);
//     })
//     .catch((error) => {
//         logger.error(error);
//         return error;
//     })
// }

// module.exports = {
//     getMember
// }
