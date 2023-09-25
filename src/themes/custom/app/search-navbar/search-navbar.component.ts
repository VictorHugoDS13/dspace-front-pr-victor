import { Component } from '@angular/core';
import { SearchNavbarComponent as BaseComponent } from '../../../../app/search-navbar/search-navbar.component';
import { ClickOutsideDirective } from '../../../../app/shared/utils/click-outside.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserOnlyPipe } from '../../../../app/shared/utils/browser-only.pipe';

@Component({
  selector: 'ds-search-navbar',
  // styleUrls: ['./search-navbar.component.scss'],
  styleUrls: ['../../../../app/search-navbar/search-navbar.component.scss'],
  // templateUrl: './search-navbar.component.html'
  templateUrl: '../../../../app/search-navbar/search-navbar.component.html',
  standalone: true,
  imports: [ClickOutsideDirective, FormsModule, ReactiveFormsModule, TranslateModule, BrowserOnlyPipe]
})
export class SearchNavbarComponent extends BaseComponent {

}
