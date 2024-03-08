import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the request is for the registration API
    const isRegistrationApi = request.url.includes('register');

    if (!isRegistrationApi) {
      // Exclude registration API from token inclusion
      const token = localStorage.getItem('token');
      if (token) {
        // Clone the request and add the Authorization header
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }

    // Log the request URL
    console.log('Request URL:', request.url);

    // Log the headers as an object
    console.log('Request Headers:', this.headersToObject(request.headers));

    // Continue with the request
    return next.handle(request);
  }

  // Helper function to convert HttpHeaders to an object
  private headersToObject(headers: HttpHeaders): any {
    const headersObject: any = {};
    headers.keys().forEach(key => {
      headersObject[key] = headers.getAll(key);
    });
    return headersObject;
  }
}
