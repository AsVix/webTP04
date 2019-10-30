import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AccessCatalogueGuard implements CanActivate {
  canActivate(): boolean {
     return true;  
  }
}

