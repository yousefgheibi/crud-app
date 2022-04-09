import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'http://localhost:3000/user';


  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }



  // create data 

  createData(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }


  // delete data 

  deleteData(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${id}`);
  }

  // update data
  updateData(data: any, id: number): Observable<any> {
    return this._http.put(`${this.apiUrl}/${id}`, data);
  }


  getSingleData(id: number): Observable<any> {
    return this._http.get(`${this.apiUrl}/${id}`);
  }

}
