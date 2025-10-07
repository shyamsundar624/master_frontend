import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  
      private BASE_URL="http://localhost:9090/catalogue";
    
    
      constructor(private http:HttpClient) { }
    
      createCatalogue(catalogue:any):Observable<string>{
        return this.http.post(`${this.BASE_URL}/save`,catalogue,{responseType:"text"})
      }
  
      updateCatalogue(catalogue:any):Observable<string>{
        return this.http.put(`${this.BASE_URL}/update`,catalogue,{responseType:"text"})
      }
    
      getAllCatalogue():Observable<any[]>{
        return this.http.get<any[]>(`${this.BASE_URL}/all`);
      }
    
      getCatalogueById(id:number):Observable<any>{
        return this.http.get<any>(`${this.BASE_URL}/catalogue/${id}`);
      }
    
      getCatalogueType():Observable<any[]>{
        return this.http.get<any[]>(`${this.BASE_URL}/findAllCatalogueType`);
      }
    
      deleteCatalogueById(id:number):Observable<String>{
        return this.http.delete(`${this.BASE_URL}/delete/${id}`,{responseType:"text"});
      }

      getAllCatalogues():Observable<any[]>{
        return this.http.get<any[]>(`${this.BASE_URL}/catalogueType/all`);
      }
          getCatalogueTypeById(id:number):Observable<any>{
        return this.http.get<any>(`${this.BASE_URL}/catalogueType/${id}`);
      }

       updateCatalogueType(catalogue:any):Observable<string>{
        return this.http.put(`${this.BASE_URL}/catalogueType/update`,catalogue,{responseType:"text"})
      }

      createCatalogueType(catalogue:any):Observable<string>{
        return this.http.post(`${this.BASE_URL}/catalogueType/save`,catalogue,{responseType:"text"})
      }
       deleteCatalogueTypeById(id:number):Observable<String>{
        return this.http.delete(`${this.BASE_URL}/catalogueType/delete/${id}`,{responseType:"text"});
      }
}
