import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { RegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly url = 'http://localhost:5001/api/users';

  constructor(private http: HttpClient) { }

  public getUserById(userId: string): Observable<User> {
    return this.http.get<User>(this.url + '?userId=' + userId);
  }

  public createUser(user: RegisterUser): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Referrer-Policy': 'no-referrer-when-downgrade' }) };

    return this.http.post<User>(this.url, user, httpOptions);
  }
}