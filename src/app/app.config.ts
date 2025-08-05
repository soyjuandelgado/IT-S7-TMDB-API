import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideHttpClient(withFetch()), provideFirebaseApp(() => initializeApp({ projectId: "it-s7-tmdb-api-firebase", appId: "1:229472691931:web:5210a034db45f6402c0efe", storageBucket: "it-s7-tmdb-api-firebase.firebasestorage.app", apiKey: "AIzaSyDUC53Z2ZtT8zGuB-EjEvvA7ly8IOkmeRw", authDomain: "it-s7-tmdb-api-firebase.firebaseapp.com", messagingSenderId: "229472691931" })), provideAuth(() => getAuth()),
  ],
};
