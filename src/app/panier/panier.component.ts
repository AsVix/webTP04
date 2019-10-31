import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToPanier } from './action/add-to-panier';



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
  

  constructor(private store : Store) { 
    this.store.select(state => state.panier.panier).subscribe (u => this.nbArticles = u.length);
  }

  ngOnInit() {
    this.store
  }

  onClick () {
    this.addArticle (this.name,this.ref);
    this.article.push(this.name);
    console.log(this.article,this.ref);
  }

  
  onClickDelete (name : string) {
    this.article.splice(this.article.indexOf(name));
    console.log(this.article.indexOf(name));
  }

  addArticle(name, ref) { this.store.dispatch(new AddToPanier({ name, ref})); }

}
