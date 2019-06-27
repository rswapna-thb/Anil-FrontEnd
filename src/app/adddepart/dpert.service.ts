import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Depart} from '../models/depart.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DpertService {

  constructor(private http:HttpClient) { }
      private deptUrl = 'http://localhost:8080/user-portal/Depat';
//    private deptUrl = '/Depat';

  public getUsers() {
    return this.http.get<Depart[]>(this.deptUrl);
  }

  public deleteUser(Depart) {
    return this.http.delete(this.deptUrl + "/"+ Depart.id);
  }

  public createUser(Depart) {
    return this.http.post<Depart>(this.deptUrl, Depart);
  }
}

