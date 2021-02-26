import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credentials, User } from 'src/app/features/auth/models/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login({ username, password }: Credentials): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return throwError('Invalid username or password');
    }

    return of({ name: 'test' });
  }

  logout() {
    return of(true);
  }
}
