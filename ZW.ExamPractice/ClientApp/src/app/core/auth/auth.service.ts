import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { UserLoginInfo } from './user-login-info';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userLoginInfo: UserLoginInfo): Observable<boolean> {

    if (userLoginInfo.UserName === 'admin' && userLoginInfo.PassWord === '123') {
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      );
    } else {
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = false)
      );
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
