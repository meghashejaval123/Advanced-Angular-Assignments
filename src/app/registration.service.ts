
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://reqres.in/api/register';


  constructor(private http: HttpClient) {}


  registerUser(email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http.post(this.apiUrl, body);
  }


 
  


  
}
