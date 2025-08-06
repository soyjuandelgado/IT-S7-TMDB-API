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

  registerUser() {
    console.log(this.user);
    this.userServ
      .register(this.email.value!, this.password.value!)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      //TODO: mostrar mensaje de error
      .catch((error: Error) => {
        alert(error.message);
      });
  }
}
