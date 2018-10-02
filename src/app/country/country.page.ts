import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { Country } from './country.interface';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: 'country.page.html',
  styleUrls: ['country.page.scss']
})
export class CountryPage implements OnDestroy, OnInit {
  countries: Observable<Country[]>;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countries = this.countryService.getCountries().pipe(untilDestroyed(this));
  }

  ngOnDestroy() { }
}
