import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceService} from '../api-service.service';

@NgModule({
  declarations: [CatalogueComponent, ListeArticleComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService]
})
export class CatalogueModule { }
