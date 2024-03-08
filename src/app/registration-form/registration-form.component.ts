import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  snackBar: any;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

    onSubmit(): void {
    if (this.registrationForm.valid) {
      const email = this.registrationForm.get('email')!.value;
      const password = this.registrationForm.get('password')!.value;

      this.registrationService.registerUser(email, password).subscribe(
        (response) => {
          // Handle successful registration
          if (response.token) {
            // Save the token to localStorage
            console.log(response);
            localStorage.setItem('token', response.token);
            const token = localStorage.getItem('token');
            
          }
        },
        (error) => {
          // Handle registration error
          console.error('Registration failed:', error);
        }
      );
    }
  }

}