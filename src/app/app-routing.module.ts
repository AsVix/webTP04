import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessCatalogueGuard} from './guard/access-catalogue.guard';


                        
const routes: Routes = [{ path: 'panier',canActivate : [AccessCatalogueGuard], loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) },
 { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
  { path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule) },
 { path: 'compte', loadChildren: () => import('./compte/compte.module').then(m => m.CompteModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AccessCatalogueGuard]
})
export class AppRoutingModule { }
