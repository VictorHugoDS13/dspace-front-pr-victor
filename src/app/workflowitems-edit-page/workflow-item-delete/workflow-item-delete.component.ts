import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkflowItemActionPageDirective } from '../workflow-item-action-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowItemDataService } from '../../core/submission/workflowitem-data.service';
import { RouteService } from '../../core/services/route.service';
import { NotificationsService } from '../../shared/notifications/notifications.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RequestService } from '../../core/data/request.service';
import { map } from 'rxjs/operators';
import { RemoteData } from '../../core/data/remote-data';
import { NoContent } from '../../core/shared/NoContent.model';
import { getFirstCompletedRemoteData } from '../../core/shared/operators';
import { CommonModule, Location } from '@angular/common';
import { VarDirective } from '../../shared/utils/var.directive';
import {
  ModifyItemOverviewComponent
} from '../../item-page/edit-item-page/modify-item-overview/modify-item-overview.component';

@Component({
  selector: 'ds-workflow-item-delete',
  templateUrl: '../workflow-item-action-page.component.html',
  standalone: true,
  imports: [VarDirective, TranslateModule, CommonModule, ModifyItemOverviewComponent]
})
/**
 * Component representing a page to delete a workflow item
 */
export class WorkflowItemDeleteComponent extends WorkflowItemActionPageDirective {
  constructor(protected route: ActivatedRoute,
              protected workflowItemService: WorkflowItemDataService,
              protected router: Router,
              protected routeService: RouteService,
              protected notificationsService: NotificationsService,
              protected translationService: TranslateService,
              protected requestService: RequestService,
              protected location: Location,
  ) {
    super(route, workflowItemService, router, routeService, notificationsService, translationService, requestService, location);
  }

  /**
   * Returns the type of page
   */
  getType(): string {
    return 'delete';
  }

  /**
   * Performs the action of this workflow item action page
   * @param id The id of the WorkflowItem
   */
  sendRequest(id: string): Observable<boolean> {
    return this.workflowItemService.delete(id).pipe(
      getFirstCompletedRemoteData(),
      map((response: RemoteData<NoContent>) => response.hasSucceeded)
    );
  }
}
