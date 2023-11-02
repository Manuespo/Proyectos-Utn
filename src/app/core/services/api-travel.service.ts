import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { ITravel } from '../entity';

@Injectable({
  providedIn: 'root'
})
export class ApiTravelService {

  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getsTravel(): Observable<ITravel[]> {
    return this.http.get<ITravel[]>(`${this.baseURL}/travels`);
  }
  getTravel(travel: ITravel): Observable<ITravel> {
    return this.http.get<ITravel>(`${this.baseURL}/travels/${travel.id}`);
  }
  deleteTravel(travel: ITravel): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/travels/${travel.id}`).pipe(
      map(resp => { return true; }),
      catchError(error => of(false))
    );
  }
  deleteTravel_(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/persons/${id}`).pipe(
      map(resp => { return true }),
      catchError(error => of(false))
    );
  }
  postTravel(travel: ITravel): Observable<ITravel> {
    return this.http.post<ITravel>(`${this.baseURL}/travels`, travel, { headers: { 'Content-type': 'application/json' } });
  }

}