import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DpertService} from './adddepart/dpert.service';
import {HttpClientModule} from "@angular/common/http";

import { AdddepartComponent } from './adddepart/adddepart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddepartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [DpertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
