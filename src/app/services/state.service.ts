import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '../entities/state';
import { Observable } from 'rxjs';
import { BaseBinding } from '../entities/base-binding';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  
    private BASE_URL="http://localhost:9090/state";
  
  
    constructor(private http:HttpClient) { }
  
    createState(country:State):Observable<string>{
      return this.http.post(`${this.BASE_URL}/save`,country,{responseType:"text"})
    }

    updateState(country:State):Observable<string>{
      return this.http.put(`${this.BASE_URL}/update`,country,{responseType:"text"})
    }
  
    getAllState():Observable<State[]>{
      return this.http.get<State[]>(`${this.BASE_URL}/all`);
    }
  
    getStateById(id:number):Observable<State>{
      return this.http.get<State>(`${this.BASE_URL}/state/${id}`);
    }
  
    getStateIdAndName():Observable<BaseBinding[]>{
      return this.http.get<BaseBinding[]>(`${this.BASE_URL}/state`);
    }
  
    deleteStateById(id:number):Observable<String>{
      return this.http.delete(`${this.BASE_URL}/delete/${id}`,{responseType:"text"});
    }
}
