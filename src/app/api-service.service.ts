import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Catalogue } from './models/Catalogue';
import {Observable,pipe } from "rxjs";
import { tap,map } from 'rxjs/operators';


@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getCatalogue () : Observable<Catalogue[]> {
    return this.http.get<Catalogue[]> ( environment.urlApiCatalogue).pipe (tap((value) => console.log(value)) );
  }
}