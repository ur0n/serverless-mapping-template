'use strict';

module.exports.hello = (event, context, callback) => {
  console.log("[LOG]", event)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: {
        id: event.id,
        name: event.name
      }
    })
  };

  callback(null, response);
};
