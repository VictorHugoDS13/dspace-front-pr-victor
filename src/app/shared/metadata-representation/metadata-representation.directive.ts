import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dsMetadataRepresentation]',
    standalone: true
})
/**
 * Directive used as a hook to know where to inject the dynamic metadata representation component
 */
export class MetadataRepresentationDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
