import { Injectable } from '@angular/core';
import { User } from "../Models/User";
import { environment } from '../../environments/environment';

@Injectable()
export class CurrentUserService {
  
  private _loggedUser : User;
  
  constructor() { 
    this.login(environment.loggedInUser);
  }
  
  isUserLoggedIn(): boolean {
    return this.getUser() != null;
  }
  
  isUserAdmin(): boolean {
    return this.isUserLoggedIn() && this.getUser().isAdmin;
  }

  getUser() : User {
    return this._loggedUser;
  }
  
  logout(): void {
    this._loggedUser = null;
  }

  login(user : User) : void {
    this._loggedUser = user;
  }

}
