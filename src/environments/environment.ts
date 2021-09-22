// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: 'spring-boot-app',
  grantType : 'password',
  backend_network_error: 'The backend Serer is not available',
  //t1Url: 'https://41.215.215.21:8443',
  //api: 'http://192.168.1.252:8443',
  //api: 'https://192.168.2.124:8443',
  //api: 'https://127.0.0.1:8443',
  //api: 'https://localhost:8443',
  api: 'http://127.0.0.1:8080',
  api2:'http://sydonia.otr.tg:8080/awclient/',
};
export const KEYCLOAk_URL = 'http://localhost:8089/auth/realms/rtis/protocol/openid-connect/token';
export const BACKEND_URL = 'http://localhost:8085/api/v1/';
export const BACKEND_NETWORK_ERROR = 'The backend Serer is not available';

