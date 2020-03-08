import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthorizationService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.authService.loginChangeEmitter.pipe(
      map(x => {

        if (x) {
          return true;
        } else {
          this.router.navigateByUrl('login');
        }
      })
    );
  }

  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.isAuthenticated) {
      return this.router.navigateByUrl('login');
    }
    return true;
  }
}