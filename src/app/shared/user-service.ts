import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private auth = inject(Auth);

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
