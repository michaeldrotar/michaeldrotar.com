import window from './window';

var hostname = window && window.location.hostname;
var isClient = !!hostname;
var isDevelopment = hostname === 'localhost';
export default {
  hostname: hostname,
  isClient: isClient,
  isServer: !isClient,
  isDevelopment: isDevelopment,
  isProduction: !isDevelopment,
  apiPath: isDevelopment ? 'http://localhost:8081' : ''
};
