import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../Models/User";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>("/data/users.json");
  }

}
