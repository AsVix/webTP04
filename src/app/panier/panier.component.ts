import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToPanier } from './action/add-to-panier';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  name: string;
  ref: string;

  constructor(private store : Store) { }

  ngOnInit() {
  }

  onClick () {
    this.addArticle (this.name,this.ref);
  }

  addArticle(name, ref) { this.store.dispatch(new AddToPanier({ name, ref})); }

}
