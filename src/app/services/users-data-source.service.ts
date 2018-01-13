import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { User } from "../Models/User";
import { Observable } from 'rxjs/Observable';

export interface dataResponse {
  users: User[];
}

@Injectable()
export class UsersDataSourceService {

  users: User[];

  constructor(private http: HttpClient) { }

  getUsers() : Observable<dataResponse> {
    return this.http.get<dataResponse>("/data/data.json");
  }

}
