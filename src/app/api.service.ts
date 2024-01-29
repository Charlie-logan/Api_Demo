import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get('http://universities.hipolabs.com/search?country=India');
  }
}
