import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILaunch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<any> {
    let params = {
      limit: 3,
      id: false
    }
    return this.http.get<any>('https://api.spacexdata.com/v3/launches', { params: params });
  }

  getLaunch(id: number): Observable<ILaunch> {
    return this.http.get<ILaunch>('https://api.spacexdata.com/v3/launches/' + id);
  }
}
