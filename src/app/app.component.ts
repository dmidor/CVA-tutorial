import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Gradation } from './gradation/gradation.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public disabled: boolean;

  title = 'ControlValueAccessor';
  public mainFormGroup: FormGroup;
  public gradation: FormControl;

  public model: FormControl;


  public toggleDisable(): void {
    this.disabled = !this.disabled;
  }


  constructor(formBuilder: FormBuilder) {

    this.gradation = formBuilder.control(1);

    this.mainFormGroup = formBuilder.group({
      gradation: this.gradation
    });

  }

  ngOnInit(): void {

    this.gradation.valueChanges.subscribe((value: Gradation) => {
      switch (value) {
        case Gradation.Low:
          console.log('DM: gradation Low');
          break;
        case Gradation.Medium:
          console.log('DM: gradation Medium');
          break;
        case Gradation.High:
          console.log('DM: gradation High');
          break;
      }
    });

  }

}
