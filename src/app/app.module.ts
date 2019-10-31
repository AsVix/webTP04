import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccessCatalogueGuard} from './guard/access-catalogue.guard';
import { Store } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccessCatalogueGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
