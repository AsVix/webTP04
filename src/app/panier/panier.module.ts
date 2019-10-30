import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { PanierComponent } from './panier.component';


import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [PanierComponent],
  imports: [
    CommonModule,
    PanierRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
  ]
})
export class PanierModule { }
