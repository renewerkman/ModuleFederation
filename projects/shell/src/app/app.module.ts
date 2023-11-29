import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as appCompShell } from './app.component';

@NgModule({
  declarations: [
    appCompShell,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [appCompShell]
})
export class AppModule { }
