import { Component } from '@angular/core';
import { LogoutPageComponent as BaseComponent } from '../../../../app/logout-page/logout-page.component';
import { LogOutComponent } from '../../../../app/shared/log-out/log-out.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-logout-page',
  // styleUrls: ['./logout-page.component.scss'],
  styleUrls: ['../../../../app/logout-page/logout-page.component.scss'],
  // templateUrl: './logout-page.component.html'
  templateUrl: '../../../../app/logout-page/logout-page.component.html',
  standalone: true,
  imports: [LogOutComponent, TranslateModule]
})
export class LogoutPageComponent extends BaseComponent {
}
