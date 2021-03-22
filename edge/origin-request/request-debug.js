/**
 *  Origin Request debugger - Retrieve the full set of context that Lmbda@EDGE is providing.
 *
 *  This is the most simple way to view the various response fields.
 *
 *  Setup:
 *  - Configure a basic Lambda@EDGE function with at least 1 second of timeout.
 *  - Create a published version of the function
 *  - Associate with a Cloudfront CDN behavior as an `Origin Request` or `Viewer Request`.
 *  - Deploy and hit any url with any configuration you need.
 *  - This can expose sensitive values, do not leave up for production or public systems.
 */

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const response = {
    bodyEncoding = 'text',
    status: 200,
    headers = {
        'content-type': { key: "Content-Type", value: "text/json" },
    },
    body: JSON.stringify(request);
  };
  callback(null, response);
}
