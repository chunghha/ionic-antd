import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from './country.interface';

@Injectable()
export class CountryService {
  constructor(
    private http: HttpClient
  ) {}

  getCountries() {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }
}
