import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public loginService: LoginService
  ) {}

  canActivate(): boolean {
    return this.loginService.isAuthenticated();
  }

}
