import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserOperationService {
  private apiUrl = 'https://reqres.in/api/users/';

  constructor(private http: HttpClient) {}

  getUserDetails(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${userId}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${user.id}`, user);
  }


  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
