import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserOperationService } from '../user-operation.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  userId!: number;
  user: any = {}; // Initialize user object
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router,private  useropservice:UserOperationService) {}

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
      const userIdParam = params['id'];
      if (userIdParam && !isNaN(userIdParam)) {
        // Check if userIdParam is not undefined and is a valid number
        this.userId = +userIdParam;
        this.useropservice.getUserDetails(this.userId).subscribe(
          (response: any) => {
            this.user = response.data;
            console.log(response.data);
          },
          (error) => {
            console.error('Error fetching user details for editing:', error);
          }
        );
      } else {
        console.error('Invalid userId parameter:', userIdParam);
        // Handle the case where userId is invalid (e.g., redirect, show an error message, etc.)
      }
    });

  }

    updateUser(): void {
    this.useropservice.updateUser(this.user).subscribe(
      (response) => {
        console.log('User updated successfully:', response);
        alert('User updated successfully!');
        this.router.navigate(['/user-listing']); // Navigate back to user listing view
      },
      (error) => {
        console.error('Error updating user:', error);
        alert('Failed to update user.');
      }
    );
  }


}
