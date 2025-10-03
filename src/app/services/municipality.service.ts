import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipality } from '../entities/municipality';
import { BaseBinding } from '../entities/base-binding';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  
    private BASE_URL="http://localhost:9090/municipality";
  
  
    constructor(private http:HttpClient) { }
  
    createMunicipality(country:Municipality):Observable<string>{
      return this.http.post(`${this.BASE_URL}/save`,country,{responseType:"text"})
    }

    updateMunicipality(country:Municipality):Observable<string>{
      return this.http.put(`${this.BASE_URL}/update`,country,{responseType:"text"})
    }
  
    getAllMunicipality():Observable<Municipality[]>{
      return this.http.get<Municipality[]>(`${this.BASE_URL}/all`);
    }
  
    getMunicipalityById(id:number):Observable<Municipality>{
      return this.http.get<Municipality>(`${this.BASE_URL}/municipality/${id}`);
    }
  
    getMunicipalityIdAndName():Observable<BaseBinding[]>{
      return this.http.get<BaseBinding[]>(`${this.BASE_URL}/municipality`);
    }
  
    deleteMunicipalityById(id:number):Observable<String>{
      return this.http.delete(`${this.BASE_URL}/delete/${id}`,{responseType:"text"});
    }
}
