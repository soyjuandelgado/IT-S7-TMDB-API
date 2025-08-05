import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../shared/user-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private userServ = inject(UserService);
  private router = inject(Router);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  user = new FormGroup({
    email: this.email,
    password: this.password,
  });

  logInUser() {
    this.userServ
      .signIn(this.email.value!, this.password.value!)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch((error) => console.error(error));
  }
}
