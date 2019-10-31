import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeArticleComponent } from '../catalogue/liste-article/liste-article.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceService} from '../api-service.service';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {NgxsModule  } from '@ngxs/store';
import { PanierState } from '../state/panier-state';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent,ListeArticleComponent],
  imports: [
    DetailRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    NgxsModule.forRoot([
      PanierState
    ]),
  ],
  providers: [ApiServiceService],
  exports:[ListeArticleComponent]
})
export class DetailModule { }
