import { Component, Injector } from '@angular/core';
import { slideMobileNav } from '../shared/animations/slide';
import { MenuComponent } from '../shared/menu/menu.component';
import { MenuService } from '../shared/menu/menu.service';
import { HostWindowService } from '../shared/host-window.service';
import { BrowseService } from '../core/browse/browse.service';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationDataService } from '../core/data/feature-authorization/authorization-data.service';
import { MenuID } from '../shared/menu/menu-id.model';
import { ThemeService } from '../shared/theme-support/theme.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { isAuthenticated } from '../core/auth/selectors';
import { TranslateModule } from '@ngx-translate/core';
import { UserMenuComponent } from '../shared/auth-nav-menu/user-menu/user-menu.component';
import { NgClass, NgIf, NgFor, NgComponentOutlet, AsyncPipe } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component representing the public navbar
 */
@Component({
    selector: 'ds-navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html',
    animations: [slideMobileNav],
    standalone: true,
    imports: [NgbDropdownModule, NgClass, NgIf, UserMenuComponent, NgFor, NgComponentOutlet, AsyncPipe, TranslateModule]
})
export class NavbarComponent extends MenuComponent {
  /**
   * The menu ID of the Navbar is PUBLIC
   * @type {MenuID.PUBLIC}
   */
  menuID = MenuID.PUBLIC;

  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated$: Observable<boolean>;

  public isXsOrSm$: Observable<boolean>;

  constructor(protected menuService: MenuService,
    protected injector: Injector,
              public windowService: HostWindowService,
              public browseService: BrowseService,
              public authorizationService: AuthorizationDataService,
              public route: ActivatedRoute,
              protected themeService: ThemeService,
              private store: Store<AppState>,
  ) {
    super(menuService, injector, authorizationService, route, themeService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.isXsOrSm$ = this.windowService.isXsOrSm();
    this.isAuthenticated$ = this.store.pipe(select(isAuthenticated));
  }
}
