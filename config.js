const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
    portHTTP: env.PORT || '8080',
    portHTTPS: env.PORT || '8443',
    host: env.HOST || '127.0.0.1',
    jwtSecrete: '@29sAR!',
    get httpServerUrl() {
      return `http://${this.host}:${this.portHTTP}`;
    },
    get httpsServerUrl() {
        return `https://${this.host}:${this.portHTTPS}`;
    }
  };

