import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  private baseUrl: string = 'https://restcountries.com/v3.1';
  private baseCountry: string = 'https://restcountries.com/v3.1/alpha';

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) {}

  getPaisesByRegion(region: string): Observable<Region[]> {
    const url: string = `${this.baseUrl}/region/${region}`;
    return this.http.get<Region[]>(url);
  }

  getCountry(country: string): Observable<Country | null> {
    if (!country) {
      return of(null);
    }

    const url: string = `${this.baseCountry}/${country}`;

    return this.http.get<Country>(url);
  }

  getCountrySmall(country: string): Observable<Country> {
  
    const url: string = `${this.baseCountry}/${country}`;

    return this.http.get<Country>(url);
  }

  getPaisesPorCodigo( borders : string[]): Observable<Country[]>{
    if(!borders){
      return of([])
    }
    const peticiones: Observable <Country>[] =[]

    borders.forEach( codigo =>{
      const peticion = this.getCountrySmall( codigo );

      peticiones.push( peticion);
    });

    return combineLatest( peticiones);
  }


  
  
}
