import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import uaLocale from "@angular/common/locales/ru-UA";
import {registerLocaleData} from "@angular/common";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { CreateComponent } from './create/create/create.component';
import { EditComponent } from './edit/edit/edit.component';
import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './Shared/layouts/main-layout/main-layout.component';
import {MaterialModule} from "./Shared/modules/material.module";
import { WatchComponent } from './Shared/components/watch/watch.component';
import { NGX_MAT_DATE_FORMATS, NgxMatDateFormats} from "@angular-material-components/datetime-picker";
import { DialogComponent } from './main/dialog/dialog.component';
import {DialogTypeComponent} from "./edit/dialog/dialogType.component";


registerLocaleData(uaLocale, 'ua')

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "l, LTS",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateComponent,
    EditComponent,
    PageNotFoundComponent,
    MainLayoutComponent,
    WatchComponent,
    DialogComponent,
    DialogTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,

  ],
  providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
