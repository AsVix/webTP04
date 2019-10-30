import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from './../../api-service.service';
import { environment } from '../../../environments/environment';
import { Catalogue } from '../../models/Catalogue';

import {Observable,pipe } from 'rxjs';
import { tap,map,switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

    mode: any;
    cat : Observable<Catalogue[]>;

    constructor (private apiServiceService : ApiServiceService) {
       this.mode = environment.mode; 

      this.cat = apiServiceService.getCatalogue ();
  }
  
  ngOnInit() {
  }

}
