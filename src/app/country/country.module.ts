import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { CountryPage } from './country.page';
import { CountryService } from './country.service';

@NgModule({
  imports: [
    IonicModule,
    NgZorroAntdMobileModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CountryPage }])
  ],
  declarations: [CountryPage],
  providers: [CountryService]
})
export class CountryPageModule {}
