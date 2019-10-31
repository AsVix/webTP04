import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToPanier } from './action/add-to-panier';
import { Remove } from './action/remove';
import {Observable  } from 'rxjs';
import {Article} from '../models/article';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  name: string;
  ref: string;
  nbArticles : number;
  article = [];
  art: Article = new Article;
  

  constructor(private store : Store) { 
    this.store.select(state => state.panier.panier).subscribe (u => this.nbArticles = u.length);
    //this.getArticle();
  }

  ngOnInit() {
    //this.store.select(state => state.panier.panier).subscribe (u => this.article = u.state);
  }

  onClick () {
    this.addArticle (this.name,this.ref);
    this.article.push(this.name);
    console.log(this.article,this.ref);
  }

  
  onClickDelete (name : string,ref : string) {
    this.art.name = name;
    console.log(this.art);
    this.delArticle(this.art);
    this.article.splice(this.article.indexOf(name),this.article.indexOf(name)+1);
    console.log(this.article.indexOf(name));

  }

  addArticle(name, ref) { this.store.dispatch(new AddToPanier({ name, ref})); }
  delArticle(article) { this.store.dispatch(new Remove(article)); }
}
