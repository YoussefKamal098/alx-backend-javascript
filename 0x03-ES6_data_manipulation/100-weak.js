// 100-weak.js

/**
 * A WeakMap to track the number of times each endpoint has been queried.
 * @type {WeakMap<Object, number>}
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Increments the query count for a given endpoint and throws an error if
 * the count reaches or exceeds 5.
 *
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @param {string} endpoint.protocol - The protocol of the endpoint (e.g., 'http').
 * @param {string} endpoint.name - The name of the endpoint (e.g., 'getUsers').
 * @throws {Error} Throws an error with the message "Endpoint load is high"
 *                 if the number of queries for the endpoint reaches 5 or more.
 */
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;

  weakMap.set(endpoint, count);

  if (count >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
