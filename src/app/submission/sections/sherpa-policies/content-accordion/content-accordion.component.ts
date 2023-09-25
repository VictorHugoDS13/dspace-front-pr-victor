import { Component, Input } from '@angular/core';

import { PermittedVersions } from '../../../../core/submission/models/sherpa-policies-details.model';
import { NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * This component represents a section that contains the inner accordions for the publisher policy versions.
 */
@Component({
  selector: 'ds-content-accordion',
  templateUrl: './content-accordion.component.html',
  styleUrls: ['./content-accordion.component.scss'],
  imports: [
    NgForOf,
    TranslateModule,
    NgIf,
    NgbCollapseModule,
    TitleCasePipe
  ],
  standalone: true
})
export class ContentAccordionComponent {
  /**
   * PermittedVersions to show information from
   */
  @Input() version: PermittedVersions;

  /**
   * A boolean representing if div should start collapsed
   */
  public isCollapsed = true;
}
