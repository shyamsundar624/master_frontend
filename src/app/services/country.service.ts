import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../entities/country';
import { Observable } from 'rxjs';
import { BaseBinding } from '../entities/base-binding';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private BASE_URL="http://localhost:9090/country";


  constructor(private http:HttpClient) { }

  createCountry(country:Country):Observable<string>{
    return this.http.post(`${this.BASE_URL}/save`,country,{responseType:"text"})
  }

  editCountry(country:Country):Observable<string>{
    return this.http.put(`${this.BASE_URL}/update`,country,{responseType:"text"})
  }

  getAllCountry():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.BASE_URL}/all`);
  }

  getCountryById(id:number):Observable<Country>{
    return this.http.get<Country>(`${this.BASE_URL}/country/${id}`);
  }

  getCountryIdAndName():Observable<BaseBinding[]>{
    return this.http.get<BaseBinding[]>(`${this.BASE_URL}/country`);
  }

  deleteCountryById(id:number):Observable<String>{
    return this.http.delete(`${this.BASE_URL}/delete/${id}`,{responseType:"text"});
  }
}
