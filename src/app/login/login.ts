import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../shared/user-service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private userServ = inject(UserService);
  credentials = this.userServ.credentials;
  private router = inject(Router);
  //TODO: mostrar error bajo el input
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
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
      .catch((error: Error) => {
        //TODO: mostrar mensaje de error
        alert(error.message);
      });
  }

  logInUserGoogle() {
    this.userServ
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch((error: Error) => {
        //TODO: mostrar mensaje de error
        alert(error.message);
      });
  }

  logOutUser() {
    this.userServ
      .logOut()
      .then((response) => {
        console.log(response);
        this.router.navigate(['']);
      })
      .catch((error: Error) => {
        //TODO: mostrar mensaje de error
        alert(error.message);
      });
  }
}
