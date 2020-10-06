import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { SnpFilterComponent } from './snp-filter/snp-filter.component';
import { AaRepFilterComponent } from './aa-rep-filter/aa-rep-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    SnpFilterComponent,
    AaRepFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
