import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseBinding } from '../entities/base-binding';
import { Village } from '../entities/village';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

   private BASE_URL="http://localhost:9090/village";
    
    
      constructor(private http:HttpClient) { }
    
      createVillage(country:Village):Observable<string>{
        return this.http.post(`${this.BASE_URL}/save`,country,{responseType:"text"})
      }

      updateVillage(country:Village):Observable<string>{
        return this.http.put(`${this.BASE_URL}/update`,country,{responseType:"text"})
      }
    
      getAllVillage():Observable<Village[]>{
        return this.http.get<Village[]>(`${this.BASE_URL}/all`);
      }
    
      getVillageById(id:number):Observable<Village>{
        return this.http.get<Village>(`${this.BASE_URL}/village/${id}`);
      }
    
      getVillageIdAndName():Observable<BaseBinding[]>{
        return this.http.get<BaseBinding[]>(`${this.BASE_URL}/village`);
      }
    
      deleteVillageById(id:number):Observable<String>{
        return this.http.delete(`${this.BASE_URL}/delete/${id}`,{responseType:"text"});
      }
}
