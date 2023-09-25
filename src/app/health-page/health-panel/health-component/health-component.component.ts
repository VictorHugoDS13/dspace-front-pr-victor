import { Component, Input, forwardRef } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { HealthComponent } from '../../models/health-component.model';
import { AlertType } from '../../../shared/alert/alert-type';
import { ObjNgFor } from '../../../shared/utils/object-ngfor.pipe';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';

/**
 * A component to render a "health component" object.
 *
 * Note that the word "component" in "health component" doesn't refer to Angular use of the term
 * but rather to the components used in the response of the health endpoint of Spring's Actuator
 * API.
 */
@Component({
    selector: 'ds-health-component',
    templateUrl: './health-component.component.html',
    styleUrls: ['./health-component.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgbCollapseModule, forwardRef(() => HealthComponentComponent), AlertComponent, TitleCasePipe, ObjNgFor]
})
export class HealthComponentComponent {

  /**
   * The HealthComponent object to display
   */
  @Input() healthComponent: HealthComponent;

  /**
   * The HealthComponent object name
   */
  @Input() healthComponentName: string;

  public AlertTypeEnum = AlertType;

  /**
   * A boolean representing if div should start collapsed
   */
  public isCollapsed = false;

  constructor(private translate: TranslateService) {
  }

  /**
   * Return translated label if exist for the given property
   *
   * @param property
   */
  public getPropertyLabel(property: string): string {
    const translationKey = `health-page.property.${property}`;
    const translation = this.translate.instant(translationKey);

    return (translation === translationKey) ? property : translation;
  }
}
