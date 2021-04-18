import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // import bn-ng-idle service
import {MatDialogModule} from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
