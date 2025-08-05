import { Component, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../shared/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private userServ = inject(UserService);
  private router = inject(Router);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  user = new FormGroup({
    email: this.email,
    password: this.password,
  });

  registerUser() {
    console.log(this.user)
    this.userServ
      .register(this.email.value!, this.password.value!)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch((error) => console.error(error));
  }
}
