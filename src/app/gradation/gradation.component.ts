import { Component, ElementRef, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Gradation } from './gradation.enum';

@Component({
  selector: 'app-gradation',
  templateUrl: './gradation.component.html',
  styleUrls: ['./gradation.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => GradationComponent), multi: true}
  ],
})
export class GradationComponent implements ControlValueAccessor {

  public disabled: boolean;

  public GRADIATION = Gradation;

  public gradationValue: number;


  constructor(private element: ElementRef) {
  }

  public writeValue(obj: any): void {

    // this.element.getElemById('someId').value(obj);

  }

  public selectGradation(selectedGradation): void {
    this.gradationValue = selectedGradation;
    this.propagateChange(this.gradationValue);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  propagateChange: any = () => {
  };

  propagateTouched: any = () => {
    console.log('DM: Touched');
  };

}
