import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  user = new FormGroup({
    email: this.email, 
    password: this.password
  })
}
