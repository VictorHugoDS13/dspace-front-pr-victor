import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {
  JournalComponent as BaseComponent
} from '../../../../../../../app/entity-groups/journal-entities/item-pages/journal/journal.component';
import { Context } from '../../../../../../../app/core/shared/context.model';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  ThemedResultsBackButtonComponent
} from '../../../../../../../app/shared/results-back-button/themed-results-back-button.component';
import {
  ThemedItemPageTitleFieldComponent
} from '../../../../../../../app/item-page/simple/field-components/specific-field/title/themed-item-page-field.component';
import { DsoEditMenuComponent } from '../../../../../../../app/shared/dso-page/dso-edit-menu/dso-edit-menu.component';
import {
  MetadataFieldWrapperComponent
} from '../../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { ThemedThumbnailComponent } from '../../../../../../../app/thumbnail/themed-thumbnail.component';
import {
  GenericItemPageFieldComponent
} from '../../../../../../../app/item-page/simple/field-components/specific-field/generic/generic-item-page-field.component';
import { RelatedItemsComponent } from '../../../../../../../app/item-page/simple/related-items/related-items-component';
import { RouterLink } from '@angular/router';
import {
  TabbedRelatedEntitiesSearchComponent
} from '../../../../../../../app/item-page/simple/related-entities/tabbed-related-entities-search/tabbed-related-entities-search.component';
import { TranslateModule } from '@ngx-translate/core';

@listableObjectComponent('Journal', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
  selector: 'ds-journal',
  // styleUrls: ['./journal.component.scss'],
  styleUrls: ['../../../../../../../app/entity-groups/journal-entities/item-pages/journal/journal.component.scss'],
  // templateUrl: './journal.component.html',
  templateUrl: '../../../../../../../app/entity-groups/journal-entities/item-pages/journal/journal.component.html',
  standalone: true,
  imports: [NgIf, ThemedResultsBackButtonComponent, ThemedItemPageTitleFieldComponent, DsoEditMenuComponent, MetadataFieldWrapperComponent, ThemedThumbnailComponent, GenericItemPageFieldComponent, RelatedItemsComponent, RouterLink, TabbedRelatedEntitiesSearchComponent, AsyncPipe, TranslateModule]
})
/**
 * The component for displaying metadata and relations of an item of the type Journal
 */
export class JournalComponent extends BaseComponent {
}
