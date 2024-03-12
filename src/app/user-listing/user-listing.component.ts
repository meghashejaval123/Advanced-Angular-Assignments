import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserOperationService } from '../user-operation.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrl: './user-listing.component.css'
})
export class UserListingComponent {

  users!: any[];

  constructor(private userService: UserService,private router: Router, private  useropservice:UserOperationService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.users = response.data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  viewDetails(userId: number): void {
    console.log(`View details for user with ID: ${userId}`);
    this.router.navigate(['/user-detail', userId]);
  }





// In edit option click then edit component open logic
  editUser(userId: number): void {
    console.log(`Edit user with ID: ${userId}`);
    this.router.navigate(['/edit-detail', userId]);
  }


  // In delete option click then data is remove from table 
  deleteUser(userId: number): void {
    console.log(`delete user with ID: ${userId}`);
    const confirmDelete = confirm('Are you sure to delete the user?');
    
    if (confirmDelete) {
      // Call delete API and handle success/failure
      this.useropservice.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter(user => user.id !== userId);
          alert('User deleted successfully!');
        },
        (error) => {
          console.error('Error deleting user:', error);
          alert('Failed to delete user.');
        }
      );
    }
  }


}
