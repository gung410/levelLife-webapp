import { InjectionToken } from '@angular/core';
export let ENDPOINTS_CONFIG = new InjectionToken('endpoints.config');
export const EndpointsConfig: any = {
  authen:{
    login: '/auth/login',
  }
}
