import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {

  //applied a proxy for ignore or bypass the cors policy
  private apiUrl = '/api/v1/books'; // No need for full URL
  constructor(private http: HttpClient) {}

  books() {
    return this.http.get(this.apiUrl);
  }
  saveBooks(data : any){
    return this.http.post(this.apiUrl,data);
  }
}
