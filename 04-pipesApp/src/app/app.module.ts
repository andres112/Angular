import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

// change the app locale
import spanish from '@angular/common/locales/es-CO';
import german from '@angular/common/locales/de-CH';
import { registerLocaleData } from '@angular/common';

registerLocaleData(spanish);
registerLocaleData(german);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }], // for global change of locale
  bootstrap: [AppComponent],
})
export class AppModule {}
