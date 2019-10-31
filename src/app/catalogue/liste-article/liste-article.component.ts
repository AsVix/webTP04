import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from './../../api-service.service';
import { environment } from '../../../environments/environment';
import { Catalogue } from '../../models/Catalogue';

import {Observable,pipe } from 'rxjs';
import { tap,map,switchMap  } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { AddToPanier } from '../../panier/action/add-to-panier';
import { Article } from '../../models/article';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

    mode: any;
    cat : Observable<Catalogue[]>;
    name : string;
    ref:string;

    constructor (private apiServiceService : ApiServiceService,private store:Store) {
       this.mode = environment.mode; 

      this.cat = apiServiceService.getCatalogue ();
  }

  onClick (name:string,ref:string) {
    this.addArticle (name,ref);
  }

  onClickDetail (detail:string) {
    alert(detail);
  }

  
  ngOnInit() {
  }

  addArticle(name, ref) { this.store.dispatch(new AddToPanier({ name, ref})); }

}
