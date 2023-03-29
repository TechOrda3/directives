import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Role} from './user';

@Directive({
  selector: '[appHasRole]',
  // standalone: true
})
export class HasRoleDirective {

  roles = [
    Role.USER
  ];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appHasRole(role: Role[]) {
    if (this.roles.some(r => role.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }
}
