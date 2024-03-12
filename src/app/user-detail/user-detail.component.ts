import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserOperationService } from '../user-operation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  userId!: number;
  user: any;
  userNotFound: boolean = false;
  errorOccurred = false;
  constructor(private route: ActivatedRoute, private userService: UserService,private  useropservice:UserOperationService,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.useropservice.getUserDetails(this.userId).subscribe(
        (response: any) => {
          if (response.data) {
            this.user = response.data;
          } else {
            this.userNotFound = true;
          }
        },
        (error) => {
          console.error('Error fetching user details:', error);
          this.userNotFound = true;
        }
      );
    });
  } 

}
