// add-customer-by-rct-frm.component.ts

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BulletinService } from '../bulletin-service.service';

@Component({
  selector: 'app-add-customer-by-rct-frm',
  templateUrl: './add-customer-by-rct-frm.component.html',
  styleUrls: ['./add-customer-by-rct-frm.component.css']
})
export class AddCustomerByRctFrmComponent implements OnInit {
  customerForm!: FormGroup;
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, this.customEmailValidator]],
      dob: [null, [Validators.required,this.ageValidator()]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      pinCode: ['',
        [
          Validators.required,
          Validators.pattern(/^\d{4,6}$/),
          Validators.maxLength(6),
        ],],
        address: [''], 
    });
    
   }

   // DOB validation 
   ageValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const birthDate = new Date(control.value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
  
      if (age < 18) {
        return { isUnderage: true };
      }
  
      return null;
    };
  }

  // Email validation
  customEmailValidator(control: { value: string; }) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/;

    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }

    return null;
  }

    // Function to handle form submission
    onSubmit() {
      if (this.myForm.valid) {
        // Process the form data
        alert('Form submitted successfully!');
        console.log(this.myForm.value);
      }
    }
  
  
}
