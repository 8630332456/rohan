import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './01_components/components.module';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';

@NgModule({
  declarations: [   //it includes component , directive , pipes
    AppComponent, UiToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
  ],
  providers: [],  // it includes service
  bootstrap: [AppComponent]
})
export class AppModule { }
