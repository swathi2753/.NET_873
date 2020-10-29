import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatypeComponent } from './datatype/datatype.component';
import { EmployeearrayComponent } from './employeearray/employeearray.component';
import { Try2Component } from './try2/try2.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatypeComponent,
    EmployeearrayComponent,
    Try2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
