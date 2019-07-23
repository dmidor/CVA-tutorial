import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appControlDisable]'
})
export class ControlDisableDirective {

  constructor(private ngControl: NgControl) {
  }

  @Input() set appControlDisable(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }

}
