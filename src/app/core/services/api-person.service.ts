import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonService {
  
  baseURL: string ='http://localhost:3000/';
  
  constructor(private http: HttpClient) {











   }
}
