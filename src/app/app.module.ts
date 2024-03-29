import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleCheckBoxComponent } from './toggle-checkbox/toggle-checkbox.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ToggleCheckBoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
