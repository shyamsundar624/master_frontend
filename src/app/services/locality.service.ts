import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locality } from '../entities/locality';
import { BaseBinding } from '../entities/base-binding';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalityService {

  private BASE_URL="http://localhost:9090/locality";


  constructor(private http:HttpClient) { }

  createLocality(country:Locality):Observable<string>{
    return this.http.post(`${this.BASE_URL}/save`,country,{responseType:"text"})
  }

  editLocality(country:Locality):Observable<string>{
    return this.http.put(`${this.BASE_URL}/update`,country,{responseType:"text"})
  }

  getAllLocality():Observable<Locality[]>{
    return this.http.get<Locality[]>(`${this.BASE_URL}/all`);
  }

  getLocalityById(id:number):Observable<Locality>{
    return this.http.get<Locality>(`${this.BASE_URL}/locality/${id}`);
  }

  getLocalityIdAndName():Observable<BaseBinding[]>{
    return this.http.get<BaseBinding[]>(`${this.BASE_URL}/locality`);
  }

  deleteLocalityById(id:number):Observable<String>{
    return this.http.delete(`${this.BASE_URL}/delete/${id}`,{responseType:"text"});
  }
}
