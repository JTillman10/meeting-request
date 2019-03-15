import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from './material/material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WatchComponent } from './watch/watch.component';
import { WatchActionsComponent } from './watch-actions/watch-actions.component';
import { TimePipe } from './watch/time.pipe';
import { MoneyPipe } from './watch/money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    WatchComponent,
    WatchActionsComponent,
    TimePipe,
    MoneyPipe
  ],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
