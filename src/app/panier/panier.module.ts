import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { PanierComponent } from './panier.component';


import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import {NgxsModule  } from '@ngxs/store';
import { PanierState } from '../state/panier-state';





@NgModule({
  declarations: [PanierComponent],
  imports: [
    CommonModule,
    PanierRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    NgxsModule.forRoot([
      PanierState
    ]),
  ]
})
export class PanierModule { }
