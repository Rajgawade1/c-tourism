import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Replace with dynamic credentials or retrieval from a login service
  const username = 'tourism-user';
  const password = 'abc34#236312tee';
  
  // Encode credentials in Base64 format
  const authToken = btoa(`${username}:${password}`);

  // Clone the request and insert the Authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Basic ${authToken}`
    }});

  return next(authReq);
};
