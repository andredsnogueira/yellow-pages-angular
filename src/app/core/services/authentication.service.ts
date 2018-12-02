import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<any>(environment.apiUrl + '/users/login', { email, password })
      .subscribe(res => {
        localStorage.setItem('id_token', res.auth_token);
      });
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  isLoggedIn() {
    return localStorage.getItem('id_token') ? true : false;
  }
}
