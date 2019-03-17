import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SavedTimesComponent } from './saved-times/saved-times.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    WatchComponent,
    WatchActionsComponent,
    TimePipe,
    MoneyPipe,
    SavedTimesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
