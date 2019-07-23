import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GradationComponent } from './gradation/gradation.component';
import { ControlDisableDirective } from './control-utils/control-disable.directive';

@NgModule({
  declarations: [
    AppComponent,
    GradationComponent,
    ControlDisableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
