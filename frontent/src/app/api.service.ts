import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http : HttpClient) { }

  apiUrl = 'http://localhost:3000/user';


  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }



  // create data 

  createData(data :any):Observable<any>{
    return this._http.post(`${this.apiUrl}`,data); 
  }
}
