import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    // remove token from local storage
    localStorage.removeItem('token');
    // redirect to login page
    this.router.navigate(['/login']);
  }
}
