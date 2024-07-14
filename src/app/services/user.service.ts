import { HttpClient } from '@angular/common/http';
import { inject, Injectable, model } from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:3000";
  httpClient = inject(HttpClient);

  constructor() {}

  getUsers() {
    return this.httpClient.get<User[]>(this.apiUrl+'/users');
  };

  addUsers(model: User) {
    return this.httpClient.post(this.apiUrl+'/users', model);
  };
}
