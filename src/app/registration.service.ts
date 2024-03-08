
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://reqres.in/api/register';

  // private authToken = 'QpwL5tke4Pnpja7X4'; // Replace with your actual token

  constructor(private http: HttpClient) {}


  registerUser(email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http.post(this.apiUrl, body);
  }


  // registerUser(email: string, password: string): Observable<any> {
  //   const body = { email, password };
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.authToken}`,
  //   });

  //   return this.http.post(this.apiUrl, body, { headers });
  // }
  


  
}
