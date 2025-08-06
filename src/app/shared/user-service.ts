//! Las siguientes funciones de autenticación dejarán de estar disponibles cuando se cierre Firebase Dynamic Links el 25 de agosto de 2025: la autenticación a través de vínculos de correo electrónico en apps para dispositivos móviles, así como la compatibilidad con OAuth de Cordova para apps web.
//! Para usar estas funciones después del cierre de Dynamic Links, migra a una solución alternativa , como se describe en la documentación de Firebase.
//! Si no realizas ninguna acción, tus apps y usuarios finales podrán seguir usando estas funciones hasta el 25 de agosto de 2025.
//! https://firebase.google.com/support/dynamic-links-faq?hl=es-419&authuser=0&_gl=1*1xmidv2*_ga*MTczMzM3MTQ4My4xNzUzNzAyMDUy*_ga_CW55HF8NVT*czE3NTQ0NjY2MjYkbzckZzEkdDE3NTQ0NjY2MjckajU5JGwwJGgw#impacts-on-email-link-authentication

import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private auth = inject(Auth);
  credentials = signal< UserCredential | undefined>(undefined);

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(response => {
      this.credentials.set(response);
      return response
    })
}

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
    .then(response => {
      this.credentials.set(response);
      return response
    })
  }

  logOut(){
    return signOut(this.auth).then(response =>{
      this.credentials.set(undefined);
      return response;
    });
  }
}
