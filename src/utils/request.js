import { request } from 'umi';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  return response;
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
const headers = {
  'Content-Type': 'application/json'
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function (url, method, data) {
  return request(url, { method, headers, body: JSON.stringify(data) })
    .then(checkStatus)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
