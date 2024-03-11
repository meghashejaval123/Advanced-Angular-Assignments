import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BulletinService } from '../bulletin-service.service';

@Component({
  selector: 'app-add-customer-by-tpl-frm',
  templateUrl: './add-customer-by-tpl-frm.component.html',
  styleUrls: ['./add-customer-by-tpl-frm.component.css']
})
export class AddCustomerByTplFrmComponent implements OnInit {
  successMessageVisible: boolean = false;
  errorMessageVisible = false;
  customer: any = {};
  dobValidationMessage: string = '';
  age!: number;
  firstName: string = '';
  customerForm: FormGroup;
  lastName: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';
  pincode: string = '';
  mobNum:string = '';
  dob: string = '';
  emailPatternError: boolean = false;

  constructor(private fb: FormBuilder,
    private bulletService: BulletinService
    ) {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]], 
      mobile: ['', [Validators.pattern('[0-9]{10}')]],
      address: [''],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
    });
  }

  ngOnInit(): void {
  }

  // Dob validation
  calculateAge() {
    const dob = new Date(this.customerForm.value.dob);
    const today = new Date();
    this.age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      this.age--;
    }
  }

   
    onSubmit(customerForm: NgForm) {
     console.log('Form Values:', customerForm.value);
     console.log('Is Form Valid?', customerForm.valid);
     if (customerForm.valid) {
      const customerDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        dob: this.dob,
        mobile: this.mobile,
        address: this.address,
        pincode: this.pincode,
      };

      if (this.bulletService.saveCustomerDetails(customerDetails)) {
        this.successMessageVisible = true;
  
        setTimeout(() => {
          this.successMessageVisible = false;
        }, 3000); 
      } else {
        this.errorMessageVisible = true;
  
        setTimeout(() => {
          this.errorMessageVisible = false;
        }, 3000); 
  
        console.log('Failed to save customer details.');
        
      }
    } 
    else {
      console.log('Please fix the validation errors before submitting.');
     
    }
  }

  //Dob validation
  isUnderage(): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(this.dob);
  
    const age = currentDate.getFullYear() - enteredDate.getFullYear();
  
    return age < 18;
  }
  
  }

  