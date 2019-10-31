import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceService} from '../api-service.service';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {NgxsModule  } from '@ngxs/store';
import { PanierState } from '../state/panier-state';

@NgModule({
  declarations: [CatalogueComponent, ListeArticleComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    NgxsModule.forRoot([
      PanierState
    ]),
  ],
  providers: [ApiServiceService],
  exports: [ListeArticleComponent],
})
export class CatalogueModule { }
