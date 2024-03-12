import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  private bulletinNews: string[] = 
  ['Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
   'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team', 
   'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system '];

  getBulletinNews(): Observable<string[]> {
    return of(this.bulletinNews);
  }

  saveCustomerDetails(customerDetails: any): boolean {
    try {
      localStorage.setItem('customerDetails', JSON.stringify(customerDetails));
      console.log('customerDetails', JSON.stringify(customerDetails))
      console.log('Customer details saved successfully!');
      return true;
    } catch (error) {
      console.error('Error saving customer details to localStorage:', error);
      console.log('Failed to save customer details.');
      return false;
    }
  
  }
}