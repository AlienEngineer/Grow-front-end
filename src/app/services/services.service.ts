import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Service } from '../Models/Service';

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<Service[]> {
    return this.http.get<Service[]>("/data/services.json");
  }

}
